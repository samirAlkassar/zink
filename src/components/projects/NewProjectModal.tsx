"use client";

import { Buttons } from "@/components/ui/Buttons";
import { Headings } from "@/components/ui/Headings";
import IconButton from '@mui/material/IconButton';
import { MdClose } from "react-icons/md";
import {useProjectsContext} from "@/context/ProjectsContext"
import { useState } from "react";



export const NewProjectModal = () => {
    const {showNewTaskModal, setShowNewTaskModal, projectsList, setProjectsList} = useProjectsContext();


    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [group, setGroup] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [users, setUsers] = useState<string>("");
    
    if (!showNewTaskModal) return null;

    const handleSubmition  = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProjectsList((prev: any) => [
            ...prev,
            {
                title,
                description,
                deadline,
                color,
                group,
                priority,
                users,
            }
        ]);
        setShowNewTaskModal(false);
        setTitle("");
        setDescription("");
        setDeadline("");
        setColor("");
        setGroup("");
        setPriority("");
        setUsers("");
    }

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-xs bg-black/40 flex items-center justify-center">
            <div className="bg-forground text-primary rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
                <div className="flex justify-between items-center">
                    <Headings variant="h4" className="text-xl font-semibold mb-4">Add New Task</Headings>
                    <IconButton onClick={() => {setShowNewTaskModal(false)}} color="inherit" size="small"><MdClose className="text-xl"/></IconButton>
                </div>

                <form onSubmit={handleSubmition}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Title<span className="text-red-600">*</span></label>
                            <input
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                            type="text"
                            name="title"
                            required
                            placeholder="Task Title"
                            className="px-4 py-3 rounded-md  border border-border focus:outline-none text-primary"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Icon</label>
                            <div className="flex flex-wrap gap-2">
                                  ❤️😂👏🤮💖👋🙂😡🫂🥲😍⚠️
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="descripTask">Description</label>
                            <textarea 
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                            maxLength={500} 
                            name="descripTask" 
                            placeholder="descrip your task" 
                            className="px-4 min-h-20 py-2 rounded-md max-h-40 border border-border focus:outline-none text-primary"/>
                        </div>

                        <div className="flex gap-4">

                            <div className="flex flex-col gap-1  w-full">
                                <label htmlFor="descripTask">Deadline</label>
                                <input type="date" className="h-full px-2 rounded-md border border-border text-primary focus:outline-none" value={deadline} onChange={(e)=>{setDeadline(e.target.value)}}/>
                            </div>

                            <div className="flex flex-col gap-1  w-full">
                                <label htmlFor="descripTask">Priority</label>
                                <select className="px-4 py-3 rounded-md border border-border text-primary focus:outline-none" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>

                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1  w-full">
                                <label htmlFor="descripTask">Color</label>                                   
                                <input type="color" defaultValue="#a259ff" className="rounded-md border border-border text-primary focus:outline-none w-full h-full" value={color} onChange={(e)=>{e.target.value}}/>
                            </div>

                            <div className="flex flex-col gap-1  w-full">
                                <label htmlFor="descripTask">Group</label>                                    
                                <select className="px-4 py-3 rounded-md border border-border text-primary focus:outline-none w-full" value={group} onChange={(e)=>{setGroup(e.target.value)}}>
                                    <option value="No Goups">No Groups</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Assigned users</label>
                            <select className="px-4 py-3 rounded-md border border-border text-primary focus:outline-none w-full" value={users} onChange={(e)=>{setUsers(e.target.value)}}>
                                <option value="Samir Elkassar">Samir Elkassar</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6 gap-3">
                        <Buttons variant="primary" onClick={() => setShowNewTaskModal(false)}>
                            Cancel
                        </Buttons>
                        <Buttons type="submit" variant="secondary" >
                            Create Task
                        </Buttons>
                    </div>
                </form>
            </div>
        </div>
    )
}