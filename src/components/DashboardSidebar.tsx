import { ReactElement, useContext } from "react";
import Logo from "./Logo";
import {
  DashboardOutlined,
  MailOutline,
  PeopleOutline,
  SettingsOutlined,
  PersonOutline,
  Logout,
} from "@mui/icons-material";
import { AuthenticationContext } from "../AuthenticationContext";

// NOTE: ignoring this and following designs on pdf with no username
/**
 * TODO:
 *
 * 1. Display Username
 * - Extract the user name from the userContext and dynamically display the username in the header by replacing the placeholder "UserName"
 *
 * 2. Implement Logout Functionality
 * - Define a logout function that clears the user context and redirects the user to the login page.
 */

const LINK_CLASSES =
  "w-full text-left p-2 hover:text-orange-600 flex items-center ";

function DashboardSidebar(): ReactElement {
  const { setToken } = useContext(AuthenticationContext);

  const handleLogout = () => {
    setToken("");
  };

  return (
    <div className="min-w-60 border-r-2 border-gray-300">
      <div className="ml-8">
        <div className="my-8">
          <Logo />
        </div>

        <ul className="space-y-4 mt-32">
          <li className="w-full text-center">
            <button className={LINK_CLASSES}>
              <DashboardOutlined className="mr-2" /> Dashboard
            </button>
          </li>
          <li className="w-full text-center">
            <button className={LINK_CLASSES}>
              <MailOutline className="mr-2" /> Carbon Credits
            </button>
          </li>
          <li className="w-full text-center">
            <button className={LINK_CLASSES}>
              <PeopleOutline className="mr-2" /> Accounts
            </button>
          </li>
          <li className="w-full text-center">
            <button className={LINK_CLASSES}>
              <SettingsOutlined className="mr-2" /> Settings
            </button>
          </li>
          <li className="w-full text-center">
            <button className={LINK_CLASSES}>
              <PersonOutline className="mr-2" /> Profile
            </button>
          </li>
        </ul>

        {/* Set logout a fixed length instead of right at bottom so it's not too far away on vertical monitor */}
        <div className="mt-64">
          <button className={LINK_CLASSES} onClick={handleLogout}>
            <Logout className="mr-2" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
