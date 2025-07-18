import SettingsCard from "./SettingsCard";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoPersonAddOutline } from "react-icons/io5";
import { Buttons } from "../ui/Buttons";
import { SubHeadings } from "../ui/SubHeadings";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FriendsSettings = () => {
    const Friends : {name:string, image:string, online:boolean}[] = [
        { name: "John Doe", image: "/friend1.jpg", online: false },
        { name: "Jane Smith", image: "/friend2.jpeg", online: false },
        { name: "Alice Johnson", image: "/friend2.jpeg", online: false },
        { name: "Bob Brown", image: "/friend1.jpg", online: false },
        { name: "Charlie White", image: "/friend2.jpeg", online: true },
        { name: "Diana Green", image: "/friend1.jpg", online: false },
        { name: "Ethan Blue", image: "/friend2.jpeg", online: false },
        { name: "Fiona Black", image: "/friend1.jpg", online: false },
        { name: "George Yellow", image: "/friend2.jpeg", online: false },
        { name: "Hannah Purple", image: "/friend1.jpg", online: false },
    ];

    const onlineFriends = Friends.filter(friend => friend.online).length;

    return (



        <SettingsCard title={`Friends ${onlineFriends > 0 ? `(${onlineFriends})` : ""}`} icon={<LiaUserFriendsSolid/>}>
            <div className="flex flex-col items-start justify-start p-6 w-full">
                <div className="flex items-center w-full">
                    <input
                        type="text"
                        placeholder="Enter friend's email..."
                        className="border border-border rounded-md p-2 w-full  outline-2 outline-transparent focus:outline-primary/50"/>
                    <Buttons variant="primary" className="ml-2">
                        <IoPersonAddOutline className="text-lg" />
                    </Buttons>
                </div>
                <div className="flex flex-col gap-2 mt-4 w-full overflow-y-auto max-h-50 scrollbar-hide">
                    <SubHeadings variant="p3">Active Friends</SubHeadings>
                    <div className="flex flex-col gap-2 w-full">
                        {Friends.filter(friend => friend.online).map((friend, index) => (
                            <FriendsCard key={index} name={friend.name} image={friend.image} online={friend.online} />
                        ))}

                    </div>

                    <SubHeadings variant="p3" className="mt-4">Inactive Friends</SubHeadings>
                    <div className="flex flex-col gap-2 w-full">
                        {Friends.filter(friend => !friend.online).map((friend, index) => (
                            <FriendsCard key={index} name={friend.name} image={friend.image} online={friend.online} />
                        ))}

                    </div>

                </div>
            </div>
        </SettingsCard>
    );
}


export default FriendsSettings;

const FriendsCard = ({name, image, online}:{name: string, image: string, online:boolean}) => {
    return (
        <div  className="flex justify-between items-center p-2 bg-secondary/5 border border-border rounded-md">
            <div className="flex items-center gap-2 relative">
                <div className="relative rounded-full w-10 h-10 overflow-hidden border border-primary/20">
                    <Image src={image} alt={name[1]} fill/>
                </div>
                <span className={twMerge("absolute block w-2.5 h-2.5 rounded-full top-6.5 left-8", online? "bg-green-500": "bg-slate-400")}/>
                <SubHeadings variant="p3">{name}</SubHeadings>
            </div>
            <Buttons variant="secondary" size="small" className="ml-2">
                Options
            </Buttons>
        </div>
    )
}