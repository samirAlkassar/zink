"use client";

import { IoColorPaletteOutline } from "react-icons/io5";
import SettingsCard from "./SettingsCard";
import { SubHeadings } from "../ui/SubHeadings";
import { useLightModeContext } from "@/context/LightModeContext";
import { twMerge } from "tailwind-merge";
import {useState} from "react";

const ThemeSettings = () => {
    const [selecteColorTheme, setSelectedColorTheme] = useState("Midnight Pulse");
    const {setTheme, theme} = useLightModeContext();

    const changeTheme = (theme:string) => {
        if (theme === "light") {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else if (theme === "dark") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }


    const colorThemes = [
        { name: "Midnight Pulse", color: "#7F5AF0" },
        { name: "Solar Ember", color: "#FCA311" },
        { name: "Arctic Bloom", color: "#7BDFF2" },
        { name: "Verdant Mist", color: "#2EC4B6" },
        { name: "Crimson Trace", color: "#EF476F" },
        { name: "Obsidian Blue", color: "#118AB2" },
        { name: "Mint Nova", color: "#6EEB83" },
        { name: "Rose Quartz", color: "#FF5E9E" },
        { name: "Ghost Lilac", color: "#C084FC" },
    ]

    return (
        <SettingsCard title="Themes"icon={<IoColorPaletteOutline/>}>
                <div className="p-6 pt-0.5 w-full">
                    <SubHeadings variant="p3" className="text-primary/80 max-w-full">Customize your Workspace by changing the appearance and theme color. </SubHeadings>
                </div>
                <div className="px-6 pb-1.5 w-full">
                    <SubHeadings variant="p3" className="text-primary/80">Appearance</SubHeadings>   
                </div>
                
                <div className="flex flex-wrap p-6 pt-0">
                    
                    <div className={twMerge("flex flex-col items-start justify-center p-4 rounded-xl hover:bg-secondary/10 active:scale-95 transition-all duration-100 ease-in cursor-pointer",theme === "light"? "border-primary/40 border":"")} onClick={() => changeTheme("light")}>
                        <div className="bg-[#faf8f8] relative rounded-md border border-primary/20 w-28 h-18 mb-2 after:absolute after:border after:border-primary/20 after:bg-secondary/45 after:inset-0 after:top-6 after:left-6 after:rounded-sm after:rounded-bl-none after:rounded-tr-none">
                            <span className="absolute top-7 right-15 z-10 font-semibold text-[#121212]">Aa</span>
                        </div>
                        <SubHeadings variant="p3">Light</SubHeadings>
                    </div>
                    <div className={twMerge("flex flex-col items-start justify-center p-4 rounded-xl hover:bg-secondary/10 active:scale-95 transition-all duration-100 ease-in cursor-pointer",theme === "dark"? "border-primary/40 border":"")} onClick={() => changeTheme("dark")}>
                        <div className="bg-[#121212] relative rounded-md border border-primary/20 w-28 h-18 mb-2 after:absolute after:border after:border-primary/20 after:bg-[#2c2c2c] after:inset-0 after:top-6 after:left-6 after:rounded-sm after:rounded-bl-none after:rounded-tr-none">
                            <span className="absolute top-7 right-15 z-10 font-semibold text-[#faf8f8]">Aa</span>
                        </div>
                        <SubHeadings variant="p3">Dark</SubHeadings>
                    </div>
                    <div className={twMerge("flex flex-col items-start justify-center p-4 rounded-xl hover:bg-secondary/10 active:scale-95 transition-all duration-100 ease-in cursor-pointer",theme === "system"? "border-primary/40 border":"")} onClick={() => changeTheme("dark")}>
                        <div className="bg-secondary/50 relative rounded-md border border-primary/20 w-28 h-18 mb-2 after:absolute after:border after:border-primary/20 after:bg-secondary after:inset-0 after:top-6 after:left-6 after:rounded-sm after:rounded-bl-none after:rounded-tr-none">
                            <span className="absolute top-7 right-15 z-10 font-semibold text-[#faf8f8]">Aa</span>
                        </div>
                        <SubHeadings variant="p3">System</SubHeadings>
                    </div>
                </div>

                <div className="px-6 pb-1.5 w-full">
                    <SubHeadings variant="p3" className="text-primary/80">ZinK theme</SubHeadings>   
                </div>
                
                <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 p-6 pt-0 gap-2">
                {colorThemes.map(({ name, color }, index) => (
                    <div
                    key={index}
                    className={twMerge("p-4 border border-border rounded-lg flex gap-2 items-center justify-start",
                                    "hover:bg-secondary/10 active:scale-[98%] transition-all duration-100 ease-in cursor-pointer",
                                    selecteColorTheme === name ? "border border-primary/40" : "")}
                    onClick={() => setSelectedColorTheme(name)}>
                    <span className="h-4 w-4 min-h-4 min-w-4 rounded-full block" style={{ backgroundColor: color }}/>
                    <SubHeadings variant="p3" className="text-primary/80">
                        {name}
                    </SubHeadings>
                    </div>
                ))}
                </div>

            </SettingsCard>
    )
}

export default ThemeSettings;