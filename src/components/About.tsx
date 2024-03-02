import { motion } from "framer-motion";
import Avatar from "../assets/imgabout.jpg";
import TextLight from "./TextLight";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl px-6 lg:px-0 mx-auto gap-14 py-10 lg:py-20"
      >
        <div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-gray-400 text-md lg:text-lg">INTRODUCTION</h4>
            <TextLight title="Overview" />
          </motion.div>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 text-md tracking-widest mt-8 ">
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, NodeJS and
              NextJS . I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
            <div className="pt-4 flex flex-col space-y-4">
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration-neonblue/50 text-swhite font-semibold">
                  Short-term Goal:
                </span>{" "}
                Improving as well as learning many skills at programming. Become
                Fullstack Developer as soon as possible.
              </p>
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration-neonblue/50 text-swhite font-semibold">
                  Long-term Goal:
                </span>{" "}
                Become a Project Manager with professional skills.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center"
        >
          <div className="hero-img h-80 w-[90%]">
            <img
              src={Avatar}
              alt="img"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
