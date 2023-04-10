import React from "react";

// import framer motion
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.8],
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52" />
      <div className=" absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52" />
      <div className=" absolute border border-[#f7ab0a] opacity-20 rounded-full w-[650px] h-[650px] mt-52 animate-pulse" />
      <div className=" absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
