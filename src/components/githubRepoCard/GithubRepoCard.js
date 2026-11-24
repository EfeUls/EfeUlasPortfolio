import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";
import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  const Card = repo.url ? "a" : "article";
  const linkProps = repo.url
    ? { href: repo.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const date = (repo.createdAt || repo.year || "").split("T")[0];

  return (
    <Fade bottom duration={2000} distance="40px">
      <Card
        className="repo-card-div"
        {...linkProps}
        style={{ backgroundColor: theme.highlight, color: theme.text }}
      >
        <div className="repo-name-div">
          <svg aria-hidden="true" className="octicon repo-svg" height="16" viewBox="0 0 12 16" width="12">
            <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3V5h1v1zm0-2H3V3h1v1zm0-2H3V1h1v1zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zM2 12h8V2H2v10z" />
          </svg>
          <h2 className="repo-name" style={{ color: theme.text }}>{repo.name}</h2>
        </div>
        <p className="repo-description">{repo.description}</p>
        <div className="repo-details">
          {date && (
            <p className="repo-creation-date subTitle" style={{ color: theme.secondaryText }}>
              {repo.createdAt ? "Oluşturulma: " : ""}<time dateTime={date}>{date}</time>
            </p>
          )}
          {repo.languages?.length > 0 && (
            <ProjectLanguages className="repo-languages" logos={repo.languages} />
          )}
        </div>
      </Card>
    </Fade>
  );
}
