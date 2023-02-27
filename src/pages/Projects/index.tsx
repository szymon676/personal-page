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
                <ProjectCard title="Crispy-barnacle" description="My role was developing api and websockets to register, login and send messages." devStack={["Golang", "PostgreSQL","jwt"]} repo="https://github.com/szymon676/crispy-barnacle" />
                <ProjectCard title="Go-nimbus" description="Golang web framework that provides flexibility." devStack={["Golang"]} repo="https://github.com/szymon676/Go-nimbus" />
                <ProjectCard title="Finance Tracker" description="api to keep track of your funds." devStack={["Golang","PostgreSQL"]} repo="https://github.com/szymon676/finance-tracker" />
            </div>
        </motion.div>
    )
}