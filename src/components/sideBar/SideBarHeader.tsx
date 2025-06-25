import {CiBasketball} from "react-icons/ci";
import { FiSidebar } from "react-icons/fi";
import { useSideBarContext } from "@/context/SideBarContext";
import { twMerge } from "tailwind-merge";

export const  SideBarHeader = () => {
    const {setSideBarCollapse, sideBarCollapse} = useSideBarContext();

    const handleCollapsedSideBar = () => {
        if (sideBarCollapse){
            setSideBarCollapse(false)
            localStorage.setItem("sideBarCollapsed","false")
        } else {
            setSideBarCollapse(true)
            localStorage.setItem("sideBarCollapsed","true")
        }   
    }
    return (
        <div className={twMerge("flex items-center h-16 px-4",sideBarCollapse? "justify-center" : "justify-between")}>
            <a className={twMerge("flex items-center gap-2 justify-center cursor-pointer", sideBarCollapse? "hidden" : "flex")} href="/">
                <CiBasketball  className="text-2xl" />
                <h1 className="font-semibold text-lg">ZenK</h1>
            </a>
            <button className="p-2 rounded cursor-e-resize" onClick={handleCollapsedSideBar}>
                <FiSidebar className="text-xl" />
            </button>
        </div>
    )
}