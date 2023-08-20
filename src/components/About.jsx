import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants = {fadeIn('','',0.2, 1)} className="leading-loose mb-4">
        <div className="mb-2">
          I'm a computer science and math major at Rutgers University. I'm a fullstack developer with
          experience with Android Studio, Reactjs, Threejs, JavaFX, and Vite.
        </div>

        <div className="mb-2">
          I also write low-level applications with C/C++, and work on AI/ML projects with Python, Jupyter,
          PyTorch, and <a href='' className='underline-offset-auto underline'>VectorGrad</a>
        </div>
      </motion.p>
    </>
  );
}

export default About