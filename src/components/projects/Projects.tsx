"use client";

import { MdOutlineErrorOutline } from "react-icons/md"
import { SubHeadings } from "../ui/SubHeadings"
import { Headings } from "../ui/Headings"
import { useProjectsContext } from "@/context/ProjectsContext"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

export const Projects = () => {
    const {projectsList} = useProjectsContext();

    return (
    projectsList.length === 0 ? (
        <NoProjectsAddedYet />
    ) : (
        <div className="space-y-4">
        {projectsList.map((project, index) => (
            <div
            key={index}
            className="bg-forground border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                <IoCheckmarkCircleOutline className="text-green-600 mt-1 text-xl" />
                <div>
                    <h2 className="text-lg font-semibold text-primary">{project.title}</h2>
                    <p className="text-sm text-primary/70 mt-1">{project.description || "No description provided."}</p>
                </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-xl ${
                project.priority === "High"
                    ? "bg-red-500/10 text-red-500"
                    : project.priority === "Medium"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-emerald-500/10 text-emerald-500"
                }`}>
                {project.priority || "Low"}
                </span>
            </div>

            <div className="flex justify-between text-sm text-primary/60 border-t border-border pt-3">
                <span className="flex gap-2 items-center"><SlCalender/> {project.deadline || "No deadline"}</span>
                <span>👥 {project.group || "No Group"}</span>
            </div>
            </div>
        ))}
        </div>
    )
    );
}


const NoProjectsAddedYet = () => {
    return (
        <div className="flex flex-col items-center justify-center  rounded-md px-5 py-10 border border-border">
            <MdOutlineErrorOutline className="text-9xl text-secondary mb-6" />
            <Headings className="text-secondary" >No tasks found</Headings>
            <SubHeadings variant="p2" className="text-secondary">Create your first task to start growing your garden!</SubHeadings>
        </div>
    )
}