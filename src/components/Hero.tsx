"use client";

import { Container } from "./ui/Container";
import { LuLeaf } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { Buttons } from "./ui/Buttons";
import { FaArrowRight } from "react-icons/fa6";
import {Headings} from "./ui/Headings";
import { SubHeadings } from "./ui/SubHeadings";
import {useAuth} from "../context/authContext"

export const Hero = () => {
    const {isSigningIn } = useAuth();
    return (
        <section>
            <Container className="flex flex-col items-center justify-center text-center py-15"> 
                <div className="flex flex-col items-center justify-center text-center max-w-2xl sm:max-w-7xl px-4">
                    <Headings variant="h1">Bring Mindfullness <br className="flex sm:hidden" /> to Your Tasks</Headings>
                    <SubHeadings variant="p2" className="mt-5  max-w-lg sm:max-w-7xl">ZenK combines powerful task management with a serene, growth-oriented <br className="hidden sm:block" />
                    approach. As you complete tasks, watch your digital garden flourish.</SubHeadings>

                    <Buttons variant="primary" size="medium" className="mt-6 mb-12 flex justify-center items-center" href={isSigningIn? "/app/projects" : "/login"}>
                            <span>Get Started</span>   
                            <FaArrowRight className="text-lg ml-2" />
                    </Buttons>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6 px-4">
                    {cardsInformation.map((card, index) => (
                        <Card key={index} icon={card.icon} header={card.header} subheader={card.subheader} iconColor={card.iconColor} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

type cardProps = {
    icon?: React.ReactNode;
    header: string;
    subheader: string;
    iconColor?: string;
}

const cardsInformation: cardProps[] = [
    {
        icon: <LuLeaf />,
        header: "Growth Farden",
        subheader: "Watch your 3D garden grow and flourish as you complete tasks and build positive habits."
        , iconColor: "#4CAF50"
    },
    {
        icon: <SlCalender />,
        header: "Task Management",
        subheader: "Organize your tasks with ease and stay on top of your to-do list."
        , iconColor: "#2196F3"
    },
    {
        icon: <FaRegBell />,
        header: "Mindfulness",
        subheader: "Incorporate mindfulness into your daily routine with our unique approach."
        , iconColor: "#a354f3"
    }
];

const Card = ({icon, header, subheader, iconColor = "primary"}: cardProps) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center text-center px-4 py-6 primary-shadow border border-border rounded-md mt-10 bg-forground">
        {icon && <div className="text-4xl" style={{color:`${iconColor}`}}>{icon}</div>}
            <Headings variant="h4">{header}</Headings>
            <SubHeadings variant="p3">{subheader}</SubHeadings>
        </div>
    )
}