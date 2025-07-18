import { IoPersonOutline } from "react-icons/io5"
import { Buttons } from "../ui/Buttons"
import SettingsCard from "./SettingsCard"

const AccountSettings = () => {
    const avatars = ["🤔", "🌚", "🥶", "😍","🫠","😡", "😈", "👺", "🤡","😇","🐴","🦥"]

    return (
        <SettingsCard title="Account"icon={<IoPersonOutline/>}>
            <div className="p-6 pt-6 w-full">
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Name</label>
                    <input 
                    type="text" 
                    name="Name" 
                    placeholder="Your Name" 
                    className="p-2 rounded-md  border border-border focus:outline-none text-primary"/>
                </div>
            </div>
            <div className="p-6 pt-0 w-full">
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Email</label>
                    <input 
                    type="email" 
                    name="Name" 
                    placeholder="Your email" 
                    className="p-2 rounded-md  border border-border focus:outline-none text-primary"/>
                </div>
            </div>
                <div className="p-6 pt-0 w-full">
                <h4>Avatar</h4>
                <div className="grid grid-cols-6 gap-2 mt-2">
                    {avatars.map((avatar, index)=> (
                    <div key={index} className="px-4 py-2 rounded-sm bg-secondary/50 flex justify-center items-center text-xl cursor-pointer hover:bg-secondary active:scale-95 transition-all duration-100 ease-in select-none">
                        {avatar}
                    </div>
                    ))}
                </div>
            </div>
            <div className="p-6 pt-0 w-full">    
                <Buttons variant="primary" size="medium" className="w-full flex justify-center items-center">
                    <span>Save Changes</span>
                </Buttons>
            </div>

        </SettingsCard>
    )
}

export default AccountSettings;