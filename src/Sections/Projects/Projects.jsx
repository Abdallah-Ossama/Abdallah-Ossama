import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import bgProjects from "../../assets/images/project-bg.jpg"

const Projects = () => {
  return (
    <section id="projects">
        <header>
            <h1>My <span>Projects</span></h1>
            <div id="Bigline"/>
        </header>

        {/* <nav>
            <button className="all hd active"><h5>All</h5></button>
            <button className="webApp hd"><h5>best</h5></button>
            <button className="webDesign hd"><h5>design</h5></button>
        </nav> */}

        <main>
          <ProjectCard link="https://www.github.com" title="Managment system" img={bgProjects}/>
          <ProjectCard link="https://www.github.com" title="Weather App" img={bgProjects}/>
          <ProjectCard link="https://www.github.com" title="Quize App" img={bgProjects}/>
        </main>

        <button id="more">More</button>
    </section>
  )
}

export default Projects