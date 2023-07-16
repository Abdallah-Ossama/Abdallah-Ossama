import html from "./html.svg";
import css from "./css.svg";
import javascript from "./javascript.svg";
import reactjs from "./reactjs.svg";
import nodejs from "./nodejs.svg";
import ex from "./ex.png";
import api from "./api.svg";
import npm from "./npm.svg";
import vsCode from "./vs-code.svg";
import figma from "./figma.svg";
import git from "./git.svg";
import github from "./github.svg";
import bootstrap from "./bootstrap.svg";
import tailwindcss from "./tailwindcss.svg";
import wordpress from "./wordpress.svg";
import motionjs from "./motionjs.svg";





import * as React from "react";
import { motion } from "framer-motion"

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

const SkillsArrow = () => {
  return(
    <svg width="1194" height="1135" viewBox="0 0 194 135" fill="none" id="skills-arrow" xmlns="http://www.w3.org/2000/svg">
      <path d="M72.9531 41.8941L69.0307 36.0963L72.9531 41.8941ZM137.05 132.95C139.784 135.683 144.216 135.683 146.95 132.95L191.497 88.402C194.231 85.6683 194.231 81.2362 191.497 78.5025C188.764 75.7688 184.332 75.7688 181.598 78.5025L142 118.1L102.402 78.5025C99.6684 75.7688 95.2362 75.7688 92.5025 78.5025C89.7689 81.2362 89.7689 85.6683 92.5025 88.402L137.05 132.95ZM0 14C-1.6375 14 -1.88885 12.9882 -0.508514 14.526C0.639047 15.8045 2.02503 17.8422 3.83611 20.768C7.22856 26.2486 11.7766 34.3517 17.476 41.2546C23.2333 48.2276 30.935 54.9859 41.3099 57.1845C51.8784 59.4241 63.6745 56.6228 76.8755 47.6919L69.0307 36.0963C57.8902 43.6331 49.9475 44.704 44.2122 43.4886C38.2834 42.2322 33.1163 38.2086 28.2718 32.3411C23.3695 26.4036 19.583 19.6078 15.7401 13.3995C13.9335 10.4809 11.9766 7.47671 9.91012 5.17444C8.07643 3.13151 4.73986 0 0 0V14ZM76.8755 47.6919C85.0116 42.1876 92.4944 40.2153 99.0247 40.4132C105.577 40.6119 111.677 43.0111 117.002 47.077C127.822 55.3394 135 70.2033 135 84.9778H149C149 66.1412 140.02 47.0391 125.498 35.9502C118.152 30.3406 109.286 26.7179 99.449 26.4197C89.5896 26.1208 79.2592 29.1764 69.0307 36.0963L76.8755 47.6919ZM135 84.9778V128H149V84.9778H135Z"
       fill="url(#paint0_linear_77_155)"/>
      <defs>
      <linearGradient id="paint0_linear_77_155" x1="2.70165" y1="10.8685" x2="134.808" y2="59.69" gradientUnits="userSpaceOnUse">
      <stop stopColor="#631BD8"/>
      <stop offset="0.589091" stopColor="#15ADB7"/>
      <stop offset="1" stopColor="#1CDDDD"/>
      </linearGradient>
      </defs>
    </svg>
  )
}










const HtmlIcon = () => {
  return (
    <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                >
                <motion.path
                  d="M2.94103 24.7569L0.801758 0.745117H24.3208L22.1815 24.7439L12.5418 27.4148" fill="#E44D26"
                //   variants={cardVariants}
                //   initial={cardVariants.offscreen}
                //   whileInView={cardVariants.onscreenIcon}
                //   viewport={{ once: true, amount: 0.8 }}
                  className="HTML"
                  />

                <motion.path
                  d="M5.17114 5.65271H12.5614V8.59583H8.3995L8.67178 11.6103H12.5614V14.5469H5.97499L5.17114 5.65271ZM6.10464 16.025H9.06073L9.26818 18.3782L12.5614 19.2598V22.3326L6.51953 20.6471" fill="#EBEBEB"
                //   variants={cardVariants}
                //   initial={cardVariants.offscreen}
                //   whileInView={cardVariants.onscreen}
                //   viewport={{ once: true, amount: 0.8 }}
                  />

                <motion.path
                  d="M12.5613 25.3731V2.71619H22.1751L20.3405 23.2014" fill="#F16529"
                //   variants={cardVariants}
                //   initial={cardVariants.offscreen}
                //   whileInView={cardVariants.onscreen}
                //   viewport={{ once: true, amount: 0.8 }}
                  />

                <motion.path
                  d="M19.9256 5.65271H12.5483V8.59583H19.6533L19.9256 5.65271ZM19.3875 11.6103H12.5483V14.5534H16.1786L15.835 18.3782L12.5483 19.2598V22.3196L18.5772 20.6471" fill="#1E2235"
                //   variants={cardVariants}
                //   initial={cardVariants.offscreen}
                //   whileInView={cardVariants.onscreen}
                //   viewport={{ once: true, amount: 0.8 }}
                  /> 

              </motion.svg>

  )
}











export {html ,css, javascript, reactjs, nodejs, ex, api, npm, vsCode, figma, git, github, bootstrap, tailwindcss, wordpress, motionjs, SkillsArrow};
// export {HtmlIcon};