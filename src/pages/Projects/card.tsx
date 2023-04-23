type ProjectCardProps = {
    title: string,
    description: string,
    devStack: string[],
    repo: string
}

export const ProjectCard = ({ title, description, devStack, repo }: ProjectCardProps) => {
    return (
        <div className="w-[300px] pb-8 bg-gradient-to-br from-black to-zinc-900  rounded-xl"> 
            <h5 className="text-3xl mt-6 text-white ml-8 font-bold uppercase">{title}</h5>
            <p className=" ml-8 mt-8 text-lg text-gray-300">{description}</p>
            <ul className="flex justify-center gap-6 mt-8 flex-wrap">
                {devStack.map(tool => {
                     return <li className="skill">{tool}</li>
                })}
            </ul>
            <div className="flex justify-center mt-4 z-10">
            <a href={repo} target="_blank" className="py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-300 transition-colors duration-200">Show repository</a>
            </div>
        </div>
    )
}