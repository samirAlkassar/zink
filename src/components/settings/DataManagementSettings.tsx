import SettingsCard from "./SettingsCard";
import { SubHeadings } from "../ui/SubHeadings";
import { MdDownload,MdFileUpload } from "react-icons/md";
import { Buttons } from "../ui/Buttons";
import { MdOutlineDelete } from "react-icons/md"
import { CgDanger } from "react-icons/cg";
import { Headings } from "../ui/Headings";

const DataManagementSettinsg = () => {
    return (
        <SettingsCard title="Data Management">
            <div className="p-6 pb-0 pt-0.5 w-full">
                <SubHeadings variant="p3" className="text-primary/80 max-w-full">Manage your Data </SubHeadings>
            </div>
            <div className="flex flex-col items-start justify-start p-6 w-full gap-6">
                
                <div className="flex gap-4 mt-1">
                    <Buttons variant="primary" size="medium" className="flex items-center gap-2">
                        <MdDownload className="text-lg" />
                        Export Data
                    </Buttons>
                    <Buttons variant="secondary" size="medium" className="flex items-center gap-2">
                        <MdFileUpload className="text-lg" />
                        Import Data
                    </Buttons>

                </div>
                <div className="w-full mt-6 border border-danger/50 rounded bg-danger p-4">
                    <div className="flex items-center gap-2">
                        <CgDanger className="text-red-500 text-2xl" />
                        <Headings variant="h4" className="text-primary font-semibold">Danger Zone</Headings>
                    </div>
                        <SubHeadings variant="p3" className="mb-6 mt-1">These actions cannot be undone. Please be certain.</SubHeadings>
                        <Buttons variant="danger" size="medium" className="flex items-center gap-2 w-fit">
                            <MdOutlineDelete className="text-lg" />
                            Delete All Data
                        </Buttons>
                </div>
            </div>
        </SettingsCard>
    );
}

export default DataManagementSettinsg;