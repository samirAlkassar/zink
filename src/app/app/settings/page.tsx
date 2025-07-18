import SettingsHeader from "@/components/settings/SettingsHeader";
import AccountSettings from "@/components/settings/AccountSettings";
import ThemeSettings from "@/components/settings/ThemeSettings";
import NotificationsSettings from "@/components/settings/NotificationsSettings";
import FriendsSettings from "@/components/settings/FriendsSettings";
import DataManagementSettinsg from "@/components/settings/DataManagementSettings";

const SettingsPage = () => {

    
    return (
      <div className="flex flex-col gap-6">
        <SettingsHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AccountSettings />
            <ThemeSettings />
            <NotificationsSettings />
            <FriendsSettings />
        </div>
        <DataManagementSettinsg />
      </div>
    );
};



export default SettingsPage;