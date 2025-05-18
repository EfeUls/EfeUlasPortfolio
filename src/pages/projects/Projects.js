import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Projects extends Component {
    render() {
        const theme = this.props.theme;

        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            fade: true,
            cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
        };

        return ( <
            div className = "projects-main" >
            <
            Header theme = { theme }
            /> <
            div className = "basic-projects" >
            <
            Fade bottom duration = { 2000 }
            distance = "40px" >
            <
            div className = "projects-heading-div" >
            <
            div className = "projects-heading-img-div" >
            <
            ProjectsImg theme = { theme }
            /> < /
            div > <
            div className = "projects-heading-text-div" >
            <
            h1 className = "projects-heading-text"
            style = {
                { color: theme.text }
            } > { projectsHeader.title } <
            /h1> <
            p className = "projects-header-detail-text subTitle"
            style = {
                { color: theme.secondaryText }
            } > { projectsHeader["description"] } <
            /p> < /
            div > <
            /div> < /
            Fade > <
            /div>

            <
            div className = "repo-cards-div-main" > {
                ProjectsData.data.map((repo) => {
                    return <GithubRepoCard repo = { repo }
                    theme = { theme }
                    key = { repo.id }
                    />;
                })
            } <
            /div>

            <
            Button text = { "More Projects" }
            className = "project-button"
            href = "https://github.com/EfeUls?tab=repositories"
            newTab = { true }
            theme = { theme }
            />

            <
            div className = "additional-images-section" >
            <
            Fade bottom duration = { 1000 }
            distance = "20px" >
            <
            h3 className = "section-title"
            style = {
                { color: theme.text }
            } >
            Projelerden Görüntüler <
            /h3> <
            div className = "slider-container" >
            <
            Slider {...settings }
            className = "additional-images-slider" > {
                ProjectsData.data[0].additionalImages.map((image, index) => ( <
                    div key = { index }
                    className = "additional-image-item" >
                    <
                    img src = { image }
                    alt = { `Proje görüntüsü ${index + 1}` }
                    onLoad = {
                        (e) => {
                            const parent = e.target.parentElement;
                            if (parent) {
                                parent.classList.remove('loading');
                            }
                        }
                    }
                    onError = {
                        (e) => {
                            const parent = e.target.parentElement;
                            if (parent) {
                                parent.classList.remove('loading');
                                parent.classList.add('error');
                            }
                            e.target.src = '/images/fallback-image.jpg';
                        }
                    }
                    /> < /
                    div >
                ))
            } <
            /Slider> < /
            div > <
            /Fade> < /
            div >

            <
            Footer theme = { this.props.theme }
            onToggle = { this.props.onToggle }
            /> <
            TopButton theme = { this.props.theme }
            /> < /
            div >
        );
    }
}

export default Projects;