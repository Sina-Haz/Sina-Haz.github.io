import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring", 0.55*index, 0.75)} className = 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options = {{max:45,scale:1, speed:450}}
         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src = {icon} alt = {title} className='w-16 h-16 object-contain'/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div variants = {fadeIn('','',0.35, 1)} className={`leading-loose mb-4 text-secondary text-[17px]`}>
        <p className="mb-2">
          I'm a computer science and math major at Rutgers University. I do fullstack development with
          frameworks such as Android Studio, Reactjs, Threejs, JavaFX, and Vite.
        </p>

        <p className="mb-2">
          I also write low-level and systems applications with C/C++, and work on AI/ML projects with Python, Jupyter,
          PyTorch, and <a href='' className='underline-offset-auto underline hover:text-white'>VectorGrad</a>
        </p>
      </motion.div>
      <div className = 'mt-20 flex items-center justify-between flex-wrap gap-10'>
        {services.map((service,index) =>(
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About,'about')