import { Headings } from "./ui/Headings";
import { BiCheckCircle } from "react-icons/bi";
import { TbClockHour3 } from "react-icons/tb";
import { FiImage } from "react-icons/fi";
import { PiBracketsAngleBold } from "react-icons/pi";
import { Container } from "./ui/Container";
import { SubHeadings } from "./ui/SubHeadings";

export const Features = () => {
    return (
        <section className="py-6 px-4">
            <Container>
                <Headings variant="h2" className="my-10 text-center">Key Features</Headings>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 lg:gap-6 py-4">
                    {KeyFeatures.map((feature, index)=>(
                        <Feature 
                            key={index} 
                            icon={feature.icon} 
                            header={feature.header} 
                            subheader={feature.subheader} 
                            iconColor={feature.iconColor} 
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

const KeyFeatures: {icon:React.ReactNode, header: string, subheader:string, iconColor:string}[] = [
    { icon: <BiCheckCircle />, header: "Customizable Tasks", subheader: "Color-code your tasks, add checklists, set priorities, and more to make your system work for you.", iconColor: "#4CAF50" },
    { icon: <TbClockHour3 />, header: "Focus Timer", subheader: "use our buit-in timer to stay focused on tasks and track your productive time.", iconColor: "#2196F3" },
    { icon: <FiImage />, header: "Rich Attachements", subheader: "Attach images and files to your tasks for convenient reference and context.", iconColor: "#6A5ACD" },
    { icon: <PiBracketsAngleBold />, header: "Code Snippets", subheader: "Save and formate code snippets with syntax highlighting for development tasks.", iconColor: "#FF69B4" }]

const Feature = ({ icon, header, subheader, iconColor = "primary" }: {icon: React.ReactNode, header: string, subheader: string, iconColor?:string}) => {
    return (
        <div className="flex items-start justify-start gap-2 mb-10 mx-auto md:mx-0">
            {icon && <div className="text-3xl" style={{ color: `${iconColor}` }}>{icon}</div>}
            <div className="flex flex-col items-start gap-1">
                <Headings variant="h4">{header}</Headings>
                <SubHeadings variant="p3" className="max-w-sm">{subheader}</SubHeadings>
            </div>

        </div>
    )
}