import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interest from "./Interest";

function Skills() {
  return (
    <>
      <div className="skills">
        <h3 className="titre">Compétences</h3>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JavaScript" rating="3" />
        <Skill title="React.JS" rating="4" />
        <Skill title="React Native" rating="4" />
        <Skill title="Node.JS" rating="3" />
        <Skill title="WordPress" rating="4" />
      </div>
      <div className="skills">
        <h3 className="titre">Langues</h3>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="5" />
      </div>
     <Interest />
    </>
  )
}

export default Skills