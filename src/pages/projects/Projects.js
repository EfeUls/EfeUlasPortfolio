import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio";
import projects from "../../shared/projects.json";
import ProjectsImg from "./ProjectsImg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const galleryImages = projects.data.reduce(
  (images, project) => images.concat(project.additionalImages || []),
  []
);
const sliderSettings = {
  dots: true,
  infinite: galleryImages.length > 1,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: "ondemand",
};

export default function Projects({ theme }) {
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <main>
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text">{projectsHeader.title}</h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((repo) => <GithubRepoCard key={repo.id} repo={repo} theme={theme} />)}
        </div>
        <Button text="GitHub’da daha fazla proje" className="project-button" href="https://github.com/EfeUls?tab=repositories" newTab theme={theme} />
        {galleryImages.length > 0 && (
          <section className="additional-images-section" aria-labelledby="projects-gallery-title">
            <h2 className="section-title" id="projects-gallery-title">Projelerden Görüntüler</h2>
            <div className="slider-container">
              <Slider {...sliderSettings} className="additional-images-slider">
                {galleryImages.map((image, index) => (
                  <div key={image} className="additional-image-item">
                    <img src={process.env.PUBLIC_URL + image} alt={"Projelerden görüntü " + (index + 1)} />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        )}
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
