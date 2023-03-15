import { motion } from "framer-motion"
import { ProjectCard } from "./card"    

export const Projects = () => {
    return (
        <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="h-screen flex flex-col justify-center items-center">
            <h6 className="text-3xl md:text-6xl text-gray-200 uppercase tracking-[8px] mb-32">Projects</h6>
            
            <div className="flex justify-around gap-12">
                <ProjectCard title="Crispy-barnacle" description="Aplication to communicate with your friend via chat rooms." devStack={["Golang", "PostgreSQL","sockets"]} repo="https://github.com/szymon676/crispy-barnacle" />
                <ProjectCard title="Restaurant Managment" description="Restaurant managment microservices project." devStack={["Golang","PostgreSQL"]} repo="https://github.com/szymon676/restaurant-managment" />
                <ProjectCard title="Jobguru" description="Jobguru is a web application that allows employers to post job openings and job seekers to search for and apply to jobs." devStack={["Golang","PostgreSQL"]} repo="https://github.com/szymon676/finance-tracker" />
            </div>
        </motion.div>
    )
}