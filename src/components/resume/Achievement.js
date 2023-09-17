import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { resumeData } from "../../data/resume-data";
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2019</p>
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-2 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {resumeData.achievements.map((item) => (
            <ResumeCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
