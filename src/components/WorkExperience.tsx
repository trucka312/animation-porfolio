import { motion } from "framer-motion";
import Glitch from "./Glitch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { Experiences } from "../types";

const ExperienceCard = ({ experience }: { experience: Experiences }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <p>
        Technology:{" "}
        <span className="text-white-100 tracking-wider">
          {experience.technology}
        </span>
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default function WorkExperience() {
  return (
    <>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        id="workexperience"
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center py-20"
      >
        <p className="text-gray-400 text-md lg:text-lg m-auto my-2 uppercase">
          Companies I've worked for
        </p>
        <div className="flex  justify-center">
          <Glitch title={"Work Experience"} />
        </div>
      </motion.div>

      <div className="mt-10 lg:mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: any, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
