import React from "react";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import SkillIllustration from "./SkillIllustration";
import "./Skills.css";

export default function SkillSection({ theme }) {
  return (
    <div>
      {skills.data.map((skill) => (
        <Fade key={skill.illustration} bottom duration={2000} distance="20px">
          <div className="skills-main-div">
            <div className="skills-image-div">
              <SkillIllustration name={skill.illustration} theme={theme} />
            </div>
            <div className="skills-text-div">
              <h2 className="skills-heading" style={{ color: theme.text }}>
                {skill.title}
              </h2>
              <SoftwareSkill logos={skill.softwareSkills} />
              {skill.skills.map((sentence) => (
                <p key={sentence} className="subTitle skills-text" style={{ color: theme.secondaryText }}>
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}
