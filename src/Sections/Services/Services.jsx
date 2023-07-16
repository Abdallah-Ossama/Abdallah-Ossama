import "./Services.css";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import web from "../../assets/images/icons/services/web.png"
import creator from "../../assets/images/icons/services/creator.png";

const Servies = () => {
  return (
    <section id="services">
        <header>
          <h1>My <span>Servies</span>
          </h1>
          <div id="Bigline"/>
        </header>
        <div id="container">
            <ServiceCard title="Web Developer" img={web}/>
            <ServiceCard title="UI/UX Designer" img={creator}/>
        </div>
    </section>
  )
}

export default Servies