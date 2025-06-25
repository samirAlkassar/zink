"use client";

import { SideBar } from "@/components/sideBar/SideBar";
import {SideBarContextProvider } from "@/context/SideBarContext"
import { useAuth } from "@/context/authContext";
import NotFound from "../not-found";
import { ProjectsContextProvider } from "@/context/ProjectsContext"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const {isSigningIn} = useAuth();
    return (
        isSigningIn ? 
        (
            <ProjectsContextProvider>
                <SideBarContextProvider>
                    <div className="flex h-screen">
                        <SideBar />
                        <main className="flex-1 overflow-y-auto p-4 bg-muted">
                            {children}
                        </main>
                    </div>
                </SideBarContextProvider>
            </ProjectsContextProvider>
        ) : 
        (
            <NotFound />
        )
    );
}
