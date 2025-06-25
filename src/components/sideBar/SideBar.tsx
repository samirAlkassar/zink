import { IoSettingsOutline } from "react-icons/io5";
import { twMerge} from "tailwind-merge";
import { SideBarHeader } from "./SideBarHeader";
import { useSideBarContext } from "@/context/SideBarContext";
import { SideBarItem } from "./sideBarItem";
import { SideBarGardenStatus } from "./SideBarGardenStatus";
import { SideBarAccount } from "./SideBarAccount";
import { GoTasklist } from "react-icons/go";
import { GoSun } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { LuLeaf } from "react-icons/lu";


export const SideBar = () => {
    const {sideBarCollapse} = useSideBarContext();

    return (
        <div className={twMerge(
            "flex flex-col w-64 h-screen text-primary justify-between bg-background transform transition-all duration-150 ease-in border-r border-border",
            sideBarCollapse ? "w-16" : "w-64")}>
            <div>
                <SideBarHeader />
                <nav className="flex flex-col px-2 py-4 space-y-1">
                    <SideBarItem icon={<GoTasklist />} text="Projects" href="/app/projects" />
                    <SideBarItem icon={<GoSun />} text="Today" href="/app/today" />
                    <SideBarItem icon={<GrProjects />} text="All Tasks" href="/app/garden"/>
                    <SideBarItem icon={<LuLeaf />} text="Garden" />
                </nav>
                <div className="px-2 py-4">
                    <SideBarItem icon={<IoSettingsOutline />} text="Settings" rotate={true} />
                </div>
            </div>
            <div>
                <SideBarGardenStatus />
                <SideBarAccount />
            </div>
        </div>
    )
}


