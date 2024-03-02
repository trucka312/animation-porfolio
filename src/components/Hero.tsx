import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ComputersCanvas from "./canvas/Computer";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to my Portfolio",
      "Hi, I am a Web Developer",
      "My name is Phong",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-[500px] lg:h-screen mx-auto mt-10 lg:mt-20 pt-20">
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 px-6">
        <div className="flex flex-col justify-center items-center mt-5l">
          <div
            className="rounded-full w-5 h-5 bg-neonblue"
            style={{ boxShadow: "1px 2px 50px 16px #00f2fe" }}
          />
          <div className="w-1 h-44 lg:h-80 blue-gradient" />
        </div>
        <div className="w-full h-[100%] lg:h-[80%] absolute lg:top-[-8%] lg:left-0 lg:right-0 -left-8 top-0">
          <ComputersCanvas />
        </div>
        <div className="absolute max-w-7xl ml-6">
          <h1 className="text-4xl lg:text-5xl font-semibold px-6 h-16 lg:h-12">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#2cf9fa" />
          </h1>
          <h2 className="text-xs uppercase text-gray-500 pt-8 tracking-[10px] px-6">
            Software Engineer
          </h2>
        </div>
      </div>
    </section>
  );
}
