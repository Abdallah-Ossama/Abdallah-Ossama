import "./About.css";
import photo from "../../assets/images/my-photo.png";
import curve from "../../assets/images/AboutShape.svg";

const About = () => {
  return (
    <section id='About'>
        <div id="blend"/>
        <img id="curve" src={curve} alt="left-curve"/>
        <div className="About-container">
          <header>
            <h1>About <span>Me</span></h1>
            <div id="Bigline"/>
          </header>
          <div id="svg">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <defs>
                    <clipPath id="blobClip">
                        <path fill="" strokeWidth="7px" stroke="#F5DF12">
                            <animate attributeName="d" dur="5s" repeatCount="indefinite"
                            values="M432,353Q369,456,251,454.5Q133,453,66.5,351.5Q0,250,63.5,144Q127,38,249,39Q371,40,433,145Q495,250,432,353Z;
                            M423,347.5Q363,445,247,450.5Q131,456,68.5,353Q6,250,69.5,148.5Q133,47,251,45.5Q369,44,426,147Q483,250,423,347.5Z;
                            M430,356Q372,462,250.5,461Q129,460,76.5,355Q24,250,78.5,148.5Q133,47,251.5,45Q370,43,429,146.5Q488,250,430,356Z;
                            M432,353Q369,456,251,454.5Q133,453,66.5,351.5Q0,250,63.5,144Q127,38,249,39Q371,40,433,145Q495,250,432,353Z;"></animate>
                        </path>
                    </clipPath>
                </defs>
                <image xlinkHref={photo} x="50" y="90" width="400" height="400" clipPath="url(#blobClip)" />
                <path fill="url(#)" strokeWidth="7px" stroke="#F5DF12" clipPath="url(#blobClip)">
                    <animate attributeName="d" dur="5s" repeatCount="indefinite"
                    values="M432,353Q369,456,251,454.5Q133,453,66.5,351.5Q0,250,63.5,144Q127,38,249,39Q371,40,433,145Q495,250,432,353Z;
                    M423,347.5Q363,445,247,450.5Q131,456,68.5,353Q6,250,69.5,148.5Q133,47,251,45.5Q369,44,426,147Q483,250,423,347.5Z;
                    M430,356Q372,462,250.5,461Q129,460,76.5,355Q24,250,78.5,148.5Q133,47,251.5,45Q370,43,429,146.5Q488,250,430,356Z;
                    M432,353Q369,456,251,454.5Q133,453,66.5,351.5Q0,250,63.5,144Q127,38,249,39Q371,40,433,145Q495,250,432,353Z;"></animate>
                </path>
              </svg> 
            </div>
          <div id="about-content">
          <p>Hi, I'm Abdallah Ossama Front-End Web developer, I worked with an Electronics repairman for two years, I entered the ISEF contest using an idea I developed It using an Arduino Mega used C/ C++.I learned web development in Udacity, and completed the challenger and professional tracks.I have the flexibility to learn new things.</p>
          </div>
        </div>
        <div id="light"/>
    </section>
  )
}

export default About