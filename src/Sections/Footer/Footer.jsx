import "./Footer.css";
import linkedin from "../../assets/images/social-icons/linked-in.png";
import github from "../../assets/images/social-icons/github.png";
import youtube from "../../assets/images/social-icons/youtube.png";
import instagram from "../../assets/images/social-icons/instagram.png"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer1">
            <h4>&copy; 2023 <span>Abdallah Ossama</span></h4>
            <div className="icons">
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} loading="lazy" alt="instagram"/></a>
                <a href="https://www.youtube.com/@webkit_tutorials/featured" target="_blank"><img src={youtube} loading="lazy" alt="youtube"/></a>
                <a href="https://www.linkedin.com/in/abduallah-ossama" target="_blank"><img src={linkedin} loading="lazy" alt="linkedin"/></a>
                <a href="https://github.com/Abdallah0ossama" target="_blank"><img src={github} loading="lazy" alt="github"/></a>
            </div>
        </div>
        <div className="footer2">
            <div id="footer-blend"/>
            <h5>All rights reserved</h5>
        </div>
    </footer>
  )
}

export default Footer