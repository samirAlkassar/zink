"use client";

import {createContext, useContext, useState, useEffect } from "react";

interface sideBarContextType  {
    sideBarCollapse: boolean;
    setSideBarCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarContext = createContext<sideBarContextType | undefined>(undefined);

export const SideBarContextProvider = ({children } : {children :React.ReactNode}) => {
    const [sideBarCollapse, setSideBarCollapse] = useState<boolean>(false);

    useEffect(()=>{
        const collapsed = localStorage.getItem("sideBarCollapsed");
        if (collapsed === "true") {
            setSideBarCollapse(true);
        } else {setSideBarCollapse(false)}
    },[])


    const value = {sideBarCollapse, setSideBarCollapse}
    return (
        <SideBarContext.Provider value={value} >
            {children }
        </SideBarContext.Provider>
    )
}


export const useSideBarContext = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        throw Error ("sidebarcontext must be used within the sideBarContextProvider ⚠️")
    };
    return context
}