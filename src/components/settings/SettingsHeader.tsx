import { Headings } from "@/components/ui/Headings";
import { SubHeadings } from "@/components/ui/SubHeadings";

const SettingsHeader = () => {
    return (
        <div className="flex flex-col">
            <Headings variant="h3" className="text-primary/80">Settings</Headings>
            <SubHeadings variant="p2" className="text-primary/60">Manage your account, preferences, and friends</SubHeadings>
        </div>
    )
}

export default SettingsHeader;