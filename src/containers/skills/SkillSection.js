import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
    if (props.fileName === "DataScienceImg")
        return <DataScienceImg theme = { props.theme }
    />;
    else if (props.fileName === "FullStackImg")
        return <FullStackImg theme = { props.theme }
    />;
    return <DesignImg theme = { props.theme }
    />;
}

export default function SkillSection(props) {
    const theme = props.theme;
    return ( <
        div > {
            skills.data.map((skill, index) => {
                return ( <
                    div key = { index } >
                    <
                    Fade bottom duration = { 2000 }
                    distance = "20px" >
                    <
                    div className = "skills-main-div" >
                    <
                    div className = "skills-image-div" >
                    <
                    GetSkillSvg fileName = { skill.fileName }
                    theme = { theme }
                    /> < /
                    div > <
                    div className = "skills-text-div" >
                    <
                    h1 className = "skills-heading"
                    style = {
                        { color: theme.text }
                    } > { skill.title } <
                    /h1> <
                    SoftwareSkill logos = { skill.softwareSkills }
                    /> <
                    div > {
                        skill.skills.map((skillSentence, i) => {
                            return ( <
                                p key = { i }
                                className = "subTitle skills-text"
                                style = {
                                    { color: theme.secondaryText }
                                } > { skillSentence } <
                                /p>
                            );
                        })
                    } <
                    /div> < /
                    div > <
                    /div> < /
                    Fade > <
                    /div>
                );
            })
        } <
        /div>
    );
}