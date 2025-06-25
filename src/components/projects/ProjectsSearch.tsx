import { IoIosSearch } from "react-icons/io";

export const ProjectsSearch = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-start w-full rounded-md border border-border px-4 h-10">
                <IoIosSearch className="mr-2 text-lg cursor-pointer"/>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    className="rounded focus:outline-none w-full text-sm"/>
            </div>

            <select className="px-4 h-10 rounded-md border border-border focus:outline-none cursor-pointer">
                <option value="">All Priorities</option>
                <option value="high">Low</option>
                <option value="medium">Medium</option>
                <option value="low">High</option>
                <option value="low">Urgen</option>
            </select>
        </div>
    )
}