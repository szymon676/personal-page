import { BgCircles } from "./bgCircles";
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
    className="flex flex-col justify-center items-center h-screen">
      <BgCircles />
      
      <img
        className="h-48 w-48 mx-auto relative object-cover rounded-full
            "
        src="https://avatars.githubusercontent.com/u/122087457?v=4"
        alt=""
      />
      <h2 className="text-zinc-600 uppercase text-center tracking-[15px] mt-2 text-xl">Backend Developer</h2>
      <h3 className="text-white text-4xl">szymoslav</h3>
      <ul className="flex gap-4 z-10">
        <li className="hero-btn"><a href="#about">About</a></li>
        <li className="hero-btn"><a href="#projects">Projects</a></li>
      </ul>
    </motion.div>
  );
};
