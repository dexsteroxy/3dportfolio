import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px]   rounded-[20px]   shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] p-3 md:px-5 max-w-3xl leading-[30px]'
      >
       I am a passionate software engineer with over three years of experience, I am deeply
passionate about crafting intuitive and engaging user interface designs. My expertise lies in
developing seamless and responsive web applications that provide exceptional user
experiences.

      </motion.p>
    <div className=" px-3">
    <a download href="./AmadiSixtusCV.pdf"><button className="text-white px-4  p-2 rounded-md shadow-sm md:ml-4 shadow-white text-[15px] bg-[#1d1836]  font-medium mt-3 hover:shadow-sm xs:w-full md:w-72 hover:shadow-cyan-500 cursor-pointer">DownloadCV</button></a>
    </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
