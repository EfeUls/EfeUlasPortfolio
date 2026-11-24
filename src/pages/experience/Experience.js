import React from "react";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import { experience } from "../../portfolio";
import ExperienceImg from "./ExperienceImg";
import "./Experience.css";

export default function Experience({ theme }) {
  const { title, subtitle, description, sections = [] } = experience;

  return (
    <div className="experience-main">
      <Header theme={theme} />
      <main>
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{title}</h1>
                {subtitle && <p className="experience-heading-sub-text">{subtitle}</p>}
                <p className="experience-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {sections.length > 0 && <ExperienceAccordion sections={sections} theme={theme} />}
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
