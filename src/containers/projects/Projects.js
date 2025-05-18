import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectGallery from "../../components/projectGallery/ProjectGallery";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import projectsData from "../../shared/projects.json";

export default function Projects() {
    const [repo, setrepo] = useState([]);
    const additionalImages = [
        "/images/additional/project1.jpg",
        "/images/additional/project2.jpg",
        "/images/additional/project3.jpg",
        "/images/additional/project4.jpg",
        "/images/additional/project5.jpg"
    ];

    useEffect(() => {
        getRepoData();
    }, []);

    function getRepoData() {
        const client = new ApolloClient({
            uri: "https://api.github.com/graphql",
            request: (operation) => {
                operation.setContext({
                    headers: {
                        authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
                    },
                });
            },
        });

        client
            .query({
                query: gql `
                    {
                        repositoryOwner(login: "${openSource.githubUserName}") {
                            ... on User {
                                pinnedRepositories(first: 6) {
                                    edges {
                                        node {
                                            nameWithOwner
                                            description
                                            forkCount
                                            stargazers {
                                                totalCount
                                            }
                                            url
                                            id
                                            diskUsage
                                            primaryLanguage {
                                                name
                                                color
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
            })
            .then((result) => {
                setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
                console.log(result);
            });
    }

    function setrepoFunction(array) {
        setrepo(array);
    }

    return ( <
        div className = "main"
        id = "opensource" >
        <
        h1 className = "project-title" > Projelerim < /h1>

        { /* Manuel olarak eklenen projeler */ } <
        div className = "custom-projects-section" > {
            projectsData.data.map((project) => ( <
                div key = { project.id }
                className = "project-card" >
                <
                h3 > { project.name } < /h3> <
                p > { project.description } < /p> <
                ProjectGallery images = { project.images }
                /> <
                div className = "project-languages" > {
                    project.languages.map((lang, index) => ( <
                        span key = { index }
                        className = "language-tag" > { lang.name } <
                        /span>
                    ))
                } <
                /div> <
                a href = { project.url }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "project-link" >
                Projeyi Görüntüle <
                /a> < /
                div >
            ))
        } <
        /div>

        { /* GitHub projeleri */ } <
        h2 className = "project-title" > GitHub Projelerim < /h2> <
        div className = "repo-cards-div-main" > {
            repo.map((v, i) => {
                return <GithubRepoCard repo = { v }
                key = { v.node.id }
                />;
            })
        } <
        /div> <
        Button text = { "Daha Fazla Proje" }
        className = "project-button"
        href = "https://github.com/EfeUls?tab=repositories"
        newTab = { true }
        />

        { /* Ek Proje Görselleri */ } <
        div className = "additional-images-section" >
        <
        h3 className = "section-title" > Diğer Projelerden Görüntüler < /h3> <
        div className = "additional-images-grid" > {
            additionalImages.map((image, index) => ( <
                div key = { index }
                className = "additional-image-item" >
                <
                img src = { image }
                alt = { `Ek proje görüntüsü ${index + 1}` }
                /> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /div>
    );
}