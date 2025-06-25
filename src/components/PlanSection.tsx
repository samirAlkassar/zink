import { Container } from "./ui/Container";
import { Headings } from "./ui/Headings";
import { FiCheckCircle } from "react-icons/fi";
import { Buttons } from "./ui/Buttons";
import { twMerge } from "tailwind-merge";
import { SubHeadings } from "./ui/SubHeadings";

export const PlanSection = () => {
    return (
        <section className="py-6 px-4">
            <Container>
                <Headings className="my-10 text-center" variant="h2" >Choose Your Plan</Headings>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div key={index} className="flex justify-center">
                            {planCard(plan)}
                        </div>
                    ))}

                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                    All plans come with a 30-day money-back guarantee. No credit card required to start.

                </p>

            </Container>
        </section>
    );
}

const plans = [
    { title: "Free", price: "0", description: "Perfect for getting started with task managment.", features: ["Up to 20 active tasks", "Basic garden visualization", "Task color coding"], buttonText: "Get Started", popular: false },
    { title: "Pro", price: "9", description: "For users who want to supercharge productivity.", features: ["Unlimited tasks","Advanced 3D garden","Custom notification settings","File attachements"], buttonText: "Go Pro", popular: true },
    { title: "Team", price: "19", description: "For teams looking to collaborate mindfully.", features: ["Everything in Pro", "Team gardens", "Task assignment","Collaborative workspaces"], buttonText: "Contact Sales",   popular: false },
];

const planCard = ({ title, price,description, features, buttonText, popular }: { title: string, price: string, description: string, features: string[], buttonText: string, popular: boolean }) => {
    return (
        <div className={twMerge("bg-forground rounded-md primary-shadow hover:primary-shadow-hover p-8 flex flex-col border border-border items-start justify-between w-full",popular && "border-2 border-primary")}>
            <div>
                {popular && <div className="bg-primary text-background px-2 py-1 rounded-full text-xs font-semibold w-fit mb-2">Popular</div>}
                <Headings variant="h4" className="text-xl font-semibold mb-4">{title}</Headings>
                <Headings variant="h3" className="text-2xl font-bold mb-1">{price}/month</Headings>
                <SubHeadings variant="p2" className="text-md">{description}</SubHeadings>
                <ul className="list-inside mb-6 space-y-1 mt-4">
                    {features.map((feature, index) => (
                        <li key={index} className="text-sm text-primary/70 flex items-center justify-start gap-2"><FiCheckCircle className="text-green-700" />{feature}</li>
                    ))}
                </ul>
            </div>
            <Buttons size="small" variant={popular? "primary":"secondary"} className="w-full mt-6">
                {buttonText}
            </Buttons>
        </div>
    );
}