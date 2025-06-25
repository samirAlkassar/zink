"use client";

import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectsSearch } from "@/components/projects/ProjectsSearch";
import { Projects } from "@/components/projects/Projects";
import { NewProjectModal } from "@/components/projects/NewProjectModal";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <ProjectsHeader />
            <ProjectsSearch />
            <Projects />
            <NewProjectModal />
        </div>
    )
}

export default ProjectsPage;