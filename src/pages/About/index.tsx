import { motion } from "framer-motion";
export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="h-[80vh] flex md:flex-row flex-col justify-center items-center gap-8"
      id="about"
    >
      <div className="px-10 pb-12 md:w-[400px] md:h-[300px] md:p-0 bg-gradient-to-br from-black to-neutral-900   rounded-lg">
        <h4 className="text-2xl  text-white mt-6 md:ml-8 shadow-sm">
          About me
        </h4>
        <div className="md:ml-8 mt-8 text-white text-base">
          <p>
            Hi, My name is <span className="text-indigo-400">Szymon</span>.
          </p>
          <br />
          <p>
            My hobby is developing applications in Golang ecosystem, mainly
            Backend development.
          </p>
          <br />
          <p>I enjoy working in teams and learning new technologies.</p>
        </div>
      </div>
      <div className="px-14 pb-12 md:w-[400px] md:h-[300px] md:p-0  bg-gradient-to-br from-black to-zinc-900 rounded-lg">
        <h4 className="text-2xl  text-white mt-8 md:ml-8 shadow-sm">Skills</h4>
        <ul className="flex flex-wrap gap-3 items-center justify-center mt-2">
          <li className="skill">Next.js</li>
          <li className="skill">Tailwind CSS</li>
          <li className="skill">Golang</li>
          <li className="skill">PostgreSQL</li>
          <li className="skill">git</li>
        </ul>
      </div>
    </motion.div>
  );
};
