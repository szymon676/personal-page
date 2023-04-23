import { motion } from "framer-motion";
import { ProjectCard } from "./card";

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-10 md:py-20 lg:py-32"
    >
      <h6 className="text-3xl md:text-6xl text-gray-200 uppercase tracking-[8px] mb-10 md:mb-20">
        Projects
      </h6>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full px-4">
        <ProjectCard
          title="CodeHund"
          description="Aplication where you can post, comment and like posts"
          devStack={["Golang", "gRPC", "MongoDB", "Docker"]}
          repo="https://github.com/CodeHund/posts-ms"
        />
        <ProjectCard
          title="Restaurant Managment"
          description="Restaurant managment microservices project."
          devStack={["Golang", "PostgreSQL"]}
          repo="https://github.com/szymon676/restaurant-managment"
        />
        <ProjectCard
          title="Jobguru"
          description="Jobguru is a web application that allows employers to post job openings and job seekers to search for and apply to jobs."
          devStack={["Golang", "PostgreSQL"]}
          repo="https://github.com/szymon676/jobguru"
        />
        <ProjectCard
          title="ogcommerce"
          description="ogcommerce is a api that provides casual ecommerce site functionality."
          devStack={["Golang", "PostgreSQL","Docker"]}
          repo="https://github.com/szymon676/ogcommerce"
        />
      </div>
    </motion.div>
  );
};
