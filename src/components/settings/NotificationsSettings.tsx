import { IoNotificationsOutline } from "react-icons/io5";
import SettingsCard from "./SettingsCard";
import { SubHeadings } from "../ui/SubHeadings";
import IOSSwitch from "../ui/IOSSwitch";

const NotificationsSettings = () => {


    return (
        <SettingsCard title="Notifications" icon={<IoNotificationsOutline className="text-2xl" />}>
            <div className="flex flex-col gap-4 p-6 w-full">
                <div className="flex justify-between items-center">
                    <SubHeadings variant="p2">Task Reminders</SubHeadings>
                    <IOSSwitch/>
                </div>
                <div className="flex justify-between items-center">
                    <SubHeadings variant="p2">Garden Updates</SubHeadings>
                    <IOSSwitch/>
                </div>
                <div className="flex justify-between items-center">
                    <SubHeadings variant="p2">Friend Activity</SubHeadings>
                    <IOSSwitch/>
                </div>
                
            </div>
        </SettingsCard>
    );
}


export default NotificationsSettings;