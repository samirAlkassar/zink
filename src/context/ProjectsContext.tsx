"use client";

import { createContext, useContext, useState } from "react";

interface projectsContextType {
    showNewTaskModal: boolean;
    setShowNewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    projectsList: projectsListType[];
    setProjectsList: React.Dispatch<React.SetStateAction<projectsListType[]>>;
}

interface projectsListType {
    title: string;
    description?:string;
    icon?: any;
    color?: string;
    priority: string;
    group?:string;
    done: boolean;
    users: string[];
    deadline?: string;
}

const projectsContext = createContext<projectsContextType | undefined>(undefined);

export const ProjectsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [showNewTaskModal, setShowNewTaskModal] = useState<boolean>(false);
    const [projectsList, setProjectsList] = useState<projectsListType[]>([]);

    return (
        <projectsContext.Provider value={{ showNewTaskModal, setShowNewTaskModal, projectsList, setProjectsList }}>
            {children}
        </projectsContext.Provider>
    );
};

export const useProjectsContext = () => {
    const context = useContext(projectsContext);
    if (!context) {
        throw Error("NewProjectModalContext must be used within the projectsContextProvider.Provider ⚠️");
    }
    return context;
};