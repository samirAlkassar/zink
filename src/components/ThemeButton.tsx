"use client";

import {useState, useEffect} from "react";
import { Buttons } from "./ui/Buttons";
import { CiBrightnessUp } from "react-icons/ci";

export const ThemeButton = ({className}:{className?:string}) => {
        const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

        useEffect(()=> {
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },[])

        const toggleDarkMode = () => {
            if (theme === "light") {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } else {
                setTheme("light");
                localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
            }
        }

    return (
        <Buttons className={className} variant={"secondary"} size="small" onClick={toggleDarkMode}>
            <CiBrightnessUp className="text-lg md:text-xl text-primary" />
        </Buttons>
    )
}