import "./Contact.css";
import { motion } from "framer-motion";
import EarthCanvas from "../../Components/canvas/Earth.jsx";
 
const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


const Contact = () => {

  return (
    <motion.section
     id="contact"
     initial='hidden'
     whileInView='show'
     viewport={{ once: true, amount: 0.25 }}
    >
        <div id="contact-blend"/>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          id="contact-container"
         >
          <main>
            <form  action="https://formspree.io/f/mbjeaazr" method="POST">
              <h3>Contact</h3>
              <label>
                <span>Your Name</span>
                <input type="text" placeholder="What's your name?"/>
              </label>
      
              <label>
                <span>Your Email</span>
                <input type="email" placeholder="What's your email?" required/>
              </label>
      
              <label>
                <span>Your Message</span>
                <textarea rows={7} placeholder="What would you want to say?" required/>
              </label>
              <button type="submit">send</button>
            </form>
          </main>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          id="EarthCanvas"
         >
          <EarthCanvas/>
        </motion.div>
    </motion.section>
  )
}

export default Contact;