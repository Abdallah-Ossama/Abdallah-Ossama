// import { motion } from "framer-motion";
import "./Hero.css";
import Main_bg from "../../assets/images/test/full home ,mountains.webp"
import Stars from "../../assets/images/stars1.webp";
import Container from "./Container/Container.jsx";
import Chat from "../../Components/Chat/Chat.jsx";
import BottomLand from "../../assets/images/bottom_land.png";
import metoret1 from "../../assets/images/metoret.svg";
import metoret2 from "../../assets/images/metoret2.svg";


const Hero = () => {
  return (
    <section id="Hero">
        <Container/>
          <img className="metoret1" src={metoret1} alt="metoret"/>
          <img className="metoret2" src={metoret2} alt="metoret"/>
        <img src={Main_bg} id="main-bg" alt="bg"/>
        <img src={Stars} id="main-stars" alt="stars"/>
        <img src={BottomLand} id="bottom-land" alt="bottomLand"/>
        <div id="moon">
          <div id="div1"/>
          <div id="div2"/>
          <div id="div3"/>
        </div>
        <Chat/>
    </section>
  )
}

export default Hero;