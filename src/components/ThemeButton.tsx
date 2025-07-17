"use client";

import { useLightModeContext } from "../context/LightModeContext";
import { Buttons } from "./ui/Buttons";
import { CiBrightnessUp } from "react-icons/ci";

export const ThemeButton = ({className}:{className?:string}) => {
    const {toggleDarkMode} = useLightModeContext();


    return (
        <Buttons className={className} variant={"secondary"} size="small" onClick={toggleDarkMode}>
            <CiBrightnessUp className="text-lg md:text-xl text-primary" />
        </Buttons>
    )
}