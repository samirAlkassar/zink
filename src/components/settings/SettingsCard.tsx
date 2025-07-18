import { Headings } from "@/components/ui/Headings";

const SettingsCard = ({ title, icon, children }: { title: string, children?: React.ReactNode, icon?:React.ReactNode }) => {
    return (
        <div className="flex flex-col items-start justify-start primary-shadow border border-border rounded-md bg-forground">
            <div className="flex w-full p-6 pb-0">
                {icon && <div className="text-primary/80 text-2xl mr-2">{icon}</div>}
                <Headings variant="h4" className="font-semibold">{title}</Headings>
            </div>
            {children}
        </div>
    );
}

export default SettingsCard;