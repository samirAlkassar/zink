"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const IOSSwitch = ({SiwtchOn}:{SiwtchOn?: ()=> void}) => {
    const [clickSwittch, setClickSwitch] = useState(true);

    const handleSwitchChange = () => {
        setClickSwitch(!clickSwittch);
        SiwtchOn && SiwtchOn();
    };

    return (
        <div className={twMerge("bg-primary rounded-full w-[42px] h-[26px] flex items-center px-0.5 transition-all duration-300 ease-in cursor-pointer",
            clickSwittch ? "bg-primary/80" : "bg-secondary/60")}
            onClick={handleSwitchChange}>
            <span className={twMerge("block bg-background w-[22px] h-[22px] rounded-full",
                clickSwittch ? "translate-x-[16px] transition-all duration-300 ease-in" : "translate-x-0 transition-all duration-200 ease-in bg-primary/50"
            )}></span>
        </div>
    )
}

export default IOSSwitch;