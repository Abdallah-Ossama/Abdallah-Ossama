import "./Skills.css";
import SkillCard from "../../Components/SkillCard/SkillCard";
import {html ,css, javascript, reactjs, nodejs, ex, api, npm, vsCode, figma, git, github, bootstrap, tailwindcss, wordpress, motionjs } from "../../assets/images/skills/SkillsIcons";
import { SkillsArrow } from "../../assets/images/skills/SkillsIcons";
import * as React from "react";
import { motion } from "framer-motion";



const cardVariants = {
  offscreen: {
    opacity:0,
    pathLength: 0,
  },
  onscreen: {
    opacity:1,
    pathLength: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 5
    },
  },
  onscreenIcon: {
    opacity:1,
    pathLength: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 10
    },
  }
};











const Skills = () => {

  return (
    <section id="skills">
        <SkillsArrow/>
        <div id="skills-container">
            <header>
                <h1>My <span>Skills</span></h1>
                <div id="Bigline"/>
            </header>
            <motion.div
            id="main"
            initial={cardVariants.offscreen}
            whileInView={cardVariants.onscreen}
            viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div  
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="cards"
                >
                  
                    <SkillCard title="HTML" SkillIcon={html}/>
                    <SkillCard title="CSS" SkillIcon={css}/>
                    <SkillCard title="javascript" SkillIcon={javascript}/>
                    <SkillCard title="React.js" SkillIcon={reactjs}/>
                    <SkillCard title="Node.js" SkillIcon={nodejs}/>
                    <SkillCard title="Express" SkillIcon={ex}/>
                    <SkillCard title="Rest APIs" SkillIcon={api}/>
                    <SkillCard title="npm" SkillIcon={npm}/>
                    <SkillCard title="VS Code" SkillIcon={vsCode}/>
                    <SkillCard title="Figma" SkillIcon={figma}/>
                    <SkillCard title="Git" SkillIcon={git}/>
                    <SkillCard title="Github" SkillIcon={github}/>
                    <SkillCard title="bootstrap" SkillIcon={bootstrap}/>
                    <SkillCard title="Tailwind" SkillIcon={tailwindcss}/>
                    <SkillCard title="wordpress" SkillIcon={wordpress}/>
                    <SkillCard title="Motion.js" SkillIcon={motionjs}/>
                </motion.div>

            </motion.div>
        </div>
    </section>
  )
}

export default Skills;