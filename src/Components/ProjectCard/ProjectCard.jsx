import "./ProjectCard.css";
import smArrow from "../../assets/images/icons/sm-arrow2.webp"

const ProjectCard = ({title, img, link, id}) => {
  return (
    <div className="project-card" id={id}>
        <div className="card-container">
            <img src={img} alt="project"/>
            <p><span>{title}</span></p>
            <div className="buttons">
              <a href={link} target="_blank">Live Demo<img src={smArrow} alt="sm-arrow" /></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard