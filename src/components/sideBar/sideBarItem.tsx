import Link from "next/link"
import { useSideBarContext } from "@/context/SideBarContext";
import { twMerge } from "tailwind-merge";

export const SideBarItem = ({icon, text,href="#",rotate = false}:{icon:React.ReactNode, text:string, href?:string, rotate?: boolean}) => {
    const {sideBarCollapse} = useSideBarContext();
    return (
        <Link href={href} className={twMerge("flex items-cetner gap-3 px-4 py-2 rounded-md",
            "hover:bg-secondary/50 cursor-pointer active:bg-secondary/70 active:scale-[102%] transition-all select-none",
            sideBarCollapse? "justify-center" : "justify-start"
        )}>
            {icon && <div className={twMerge("text-md text-primary",sideBarCollapse? "text-lg" : "text-md", rotate? "hover:rotate-90 transition-all transform duration-300 ease-in-out" : "")}>{icon}</div>}
            <p className={twMerge("text-primary text-sm ",sideBarCollapse? "hidden" : "bloack")}>{text}</p>
        </Link>
    )
}