import React, { useRef, useState, Suspense, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Logo from "../assets/technologies/astronaut.png";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Phong Phạm",
          from_email: form.email,
          to_email: "phong.thanh971997@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="pt-16 lg:pt-28 pb-20 w-full grid grid-cols-1 lg:grid-cols-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" bg-black-100 p-8 rounded-2xl col-span-4 hidden lg:block"
      >
        <p className="text-gray-400 text-lg m-auto">Get in touch</p>
        <h3 className="text-4xl font-bold uppercase tracking-widest my-4">
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            // onClick={handleSubmit}
            className={`py-2 px-8 border rounded flex justify-center items-center bg-tertiary  w-fit text-white font-bold shadow-md shadow-primary `}
          >
            <div
              className={`spinning ease-linear rounded-full border-2 border-t-2 h-4 w-4 mr-1 ${
                loading ? "block" : "hidden"
              }`}
            ></div>
            Send
          </button>
        </form>
      </motion.div>
      <motion.div
        initial={{
          y: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex relative col-span-6"
      >
        <Canvas className="">
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#440BD4"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <img
          className="w-80 h-96 lg:w-[450px] lg:h-[350px] object-contain absolute top-0 bottom-8 left-8 right-0 m-auto animation"
          src={Logo}
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" bg-black-100 p-8 rounded-2xl col-span-4 lg:hidden"
      >
        <p className="text-gray-400 text-lg m-auto">Get in touch</p>
        <h3 className="text-4xl font-bold uppercase tracking-widest my-4">
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            // onClick={handleSubmit}
            className={`py-2 px-8 border rounded flex justify-center items-center bg-tertiary  w-fit text-white font-bold shadow-md shadow-primary `}
          >
            <div
              className={`spinning ease-linear rounded-full border-2 border-t-2 h-4 w-4 mr-1 ${
                loading ? "block" : "hidden"
              }`}
            ></div>
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}
