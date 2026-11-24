const openSource = {
    githubConvertedToken: process.env.GITHUB_TOKEN || "",
    githubUserName: "EfeUls",
};

const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

if (!openSource.githubConvertedToken) {
    console.error("Set GITHUB_TOKEN before fetching GitHub data.");
    process.exit(1);
}

const outputDir = path.join(__dirname, "src", "shared", "opensource");
fs.mkdirSync(outputDir, { recursive: true });

function readResponse(response) {
    if (!response.ok) throw new Error("GitHub returned HTTP " + response.status);
    return response.json().then((result) => {
        if (result.errors || !result.data || !result.data.user) {
            throw new Error("GitHub returned invalid or incomplete GraphQL data.");
        }
        return result;
    });
}

function reportError(error) {
    console.error(error.message);
    process.exitCode = 1;
}

const query_pr = {
    query: `
      query {
        user(login: "${openSource.githubUserName}"){
          pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
        totalCount
        nodes{
          id
          title
          url
          state
            mergedBy {
                avatarUrl
                url
                login
            }
            createdAt
            number
          changedFiles
            additions
            deletions
          baseRepository {
                name
                url
                owner {
                  avatarUrl
                  login
                  url
                }
              }
        }
      }
      }
  }
      `,
};

const query_issue = {
    query: `query{
          user(login: "${openSource.githubUserName}") {
      issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
        totalCount
        nodes{
            id
          closed
          title
          createdAt
          url
          number
          assignees(first:100){
            nodes{
              avatarUrl
              name
              url
            }
          }
          repository{
            name
            url
            owner{
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
      }`,
};

const query_org = {
    query: `query{
      user(login: "${openSource.githubUserName}") {
          repositoriesContributedTo(last: 100){
            totalCount
            nodes{
              owner{
                login
                avatarUrl
                __typename
              }
            }
          }
        }
      }`,
};

const query_pinned_projects = {
    query: `
      query { 
        user(login: "${openSource.githubUserName}") { 
          pinnedItems(first: 6, types: REPOSITORY) {
            totalCount
            nodes{
              ... on Repository{
                id
                    name
                    createdAt,
                    url,
                    description,
                    isFork,
                    languages(first:10){
                      nodes{
                        name
                      }
                    }
              }
            }
            }
        }
      }
      `,
};

const baseUrl = "https://api.github.com/graphql";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + openSource.githubConvertedToken,
};

const languageIcons = {
    Python: "logos-python",
    "Jupyter Notebook": "logos-jupyter",
    HTML: "logos-html-5",
    CSS: "logos-css-3",
    JavaScript: "logos-javascript",
    "C#": "logos-c-sharp",
    Java: "logos-java",
    Qt: "logos:qt",
};

async function writeDataset(filename, query, select) {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(query),
    });
    const result = await readResponse(response);
    const dataset = select(result.data.user);

    await fs.promises.writeFile(
        path.join(outputDir, filename),
        JSON.stringify(dataset, null, 2) + "\n",
        "utf8"
    );
    console.log("Updated " + filename);
}

async function main() {
    await Promise.all([
        writeDataset("pull_requests.json", query_pr, ({ pullRequests }) => {
            const data = pullRequests.nodes;
            return {
                data,
                open: data.filter(({ state }) => state === "OPEN").length,
                closed: data.filter(({ state }) => state === "CLOSED").length,
                merged: data.filter(({ state }) => state === "MERGED").length,
                totalCount: data.length,
            };
        }),
        writeDataset("issues.json", query_issue, ({ issues }) => {
            const data = issues.nodes;
            const closed = data.filter((issue) => issue.closed).length;
            return { data, open: data.length - closed, closed, totalCount: data.length };
        }),
        writeDataset("organizations.json", query_org, ({ repositoriesContributedTo }) => {
            const organizations = new Map();
            for (const { owner } of repositoriesContributedTo.nodes) {
                if (owner.__typename === "Organization") organizations.set(owner.login, owner);
            }
            return { data: Array.from(organizations.values()) };
        }),
        writeDataset("projects.json", query_pinned_projects, ({ pinnedItems }) => ({
            data: pinnedItems.nodes.map((project) => ({
                ...project,
                languages: project.languages.nodes
                    .filter(({ name }) => Object.prototype.hasOwnProperty.call(languageIcons, name))
                    .map(({ name }) => ({ name, iconifyClass: languageIcons[name] })),
            })),
        })),
    ]);
}

main().catch(reportError);
