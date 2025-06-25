"use client";

import { ThemeButton } from "@/components/ThemeButton";
import { Buttons } from "@/components/ui/Buttons";
import { Headings } from "@/components/ui/Headings";
import { SubHeadings } from "@/components/ui/SubHeadings";
import { FaRegFile } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import {useProjectsContext} from "@/context/ProjectsContext"

export const ProjectsHeader = () => {
    const {setShowNewTaskModal} = useProjectsContext();
    return (
        <div className=" flex justify-between items-center">
            <div className="flex flex-col">
                <Headings variant="h3" className="text-primary/80">Projects</Headings>
                <SubHeadings variant="p2" className="text-primary/60">Manage your tasks and watch your garden grow</SubHeadings>
            </div>

            <div className="flex gap-2">
                <Buttons size="small" variant="primary">
                    <div className="flex gap-2 items-center justify-center">
                        <FaRegFile />
                        <span>New Group</span>
                    </div>

                </Buttons>
                    <Buttons size="small" variant="secondary" onClick={() => setShowNewTaskModal(true)}>
                    <div className="flex gap-2 items-center justify-center">
                        <FiPlus />
                        <span>New Task</span>
                    </div>
                    </Buttons>

                <ThemeButton />
            </div>
        </div>
    )
}