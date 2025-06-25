import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { useSideBarContext } from "@/context/SideBarContext";

export const SideBarGardenStatus = () => {
    const {sideBarCollapse} = useSideBarContext();
    return (
        <div className=" py-4 px-2">
            <p className="px-2 text-sm text-primary/80">Quick Stats</p>
            <div className="flex flex-col  py-2 space-y-1  select-none">
                <div className="flex flex-col gap-2 justify-between px-4 py-2 rounded-md hover:bg-secondary/50 cursor-pointer active:bg-secondary/70 active:scale-[102%] transition-all">
                    <div className={twMerge("flex items-center",sideBarCollapse? "flex-col justify-center" : "flex-row justify-between")}>
                        <div className="flex items-cetner justify-start gap-2">
                            <MdOutlineHealthAndSafety className="text-md text-primary" />
                            <p className={twMerge("text-primary text-sm",sideBarCollapse? "hidden" : "block")}>Garden Health</p>
                        </div>
                        <p className="text-sm">100%</p>
                    </div>
                    <span className="w-full h-1.5 bg-green-600 rounded-xl"/>
                </div>
            </div>


            <div className="flex flex-col py-2 space-y-1  select-none">
                <div className="flex flex-col gap-2 justify-between px-4 py-2 rounded-md hover:bg-secondary/50 cursor-pointer active:bg-secondary/70 active:scale-[102%] transition-all">
                    <div className={twMerge("flex items-center",sideBarCollapse? "flex-col justify-center" : "flex-row justify-between")}>
                        <div className="flex items-cetner justify-start gap-2">
                            <TbTargetArrow className="text-md text-primary" />
                            <p className={twMerge("text-primary text-sm",sideBarCollapse? "hidden" : "block")}>Progress</p>
                        </div>
                        <p className="text-sm">10 XP</p>
                    </div>
                    <span className={twMerge("w-full h-1.5 bg-secondary/50 rounded-xl relative",
                        "before:absolute before:top-0 before:left-0 before:w-5 before:h-1.5 before:z-10 before:bg-red-500 before:rounded-xl"
                    )}/>
                </div>
            </div>
        </div>
    )
}