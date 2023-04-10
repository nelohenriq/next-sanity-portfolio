import React from "react";

// framer motion
import { motion } from "framer-motion";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div>
        {/* Experince cards */}
        {/* ExperienceCard */}
        {/* ExperienceCard */}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
