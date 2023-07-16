import "./Container.css";
import youtube from "../../../assets/images/social-icons/youtube.png";
import linkedin from "../../../assets/images/social-icons/linked-in.png";
import github from "../../../assets/images/social-icons/github.png";
import instagram from "../../../assets/images/social-icons/instagram.png";
import CV from "../../../assets/data/My_CV.pdf";

const Container = () => {
  return (
    <div id='container'>

        <h2>Hell<span>o</span>, I'm Abdallah</h2>
        <h1><span className="multitext">Front-End-Developer</span></h1>

        <div className="buttons">
            <a href={CV} download="Abdallah CV">Download CV</a>
            <a id="hire-me" href="#contact">Hire me</a>
        </div>

        <div id="social-icons">
            <a href="https://www.youtube.com/@webkit_tutorials/featured" target="_blank"><img src={youtube} sizes="(max-width: 60px)" alt="youtube"/></a>
            <a href="https://www.linkedin.com/in/abduallah-ossama" target="_blank"><img src={instagram} sizes="(max-width: 60px)" alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/abduallah-ossama" target="_blank"><img src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/Abdallah0ossama" target="_blank"><img src={github} alt="github"/></a>
        </div>

    </div>
  )
}

export default Container