import { ReactElement, useContext } from "react";
import { AuthenticationContext } from "../AuthenticationContext";
import {
  MailOutline,
  GridViewOutlined,
  ViewCompactOutlined,
} from "@mui/icons-material";
import { orange } from "@mui/material/colors";

/**
 * TODO:
 *
 * 1. Display Username
 * - Extract the user name from the userContext and dynamically display the username in the header by replacing the placeholder "UserName"
 *
 * 2. Implement Logout Functionality
 * - Define a logout function that clears the user context and redirects the user to the login page.
 */

interface DashboardHeaderProps {
  isCompact: boolean;
  setCompact: () => void;
  setNormal: () => void;
}

function DashboardHeader({
  isCompact,
  setCompact,
  setNormal,
}: DashboardHeaderProps): ReactElement {
  return (
    <header className="flex items-center justify-between border-b-2 border-gray-300 h-24">
      <h1 className="text-4xl flex items-center ml-4">
        <MailOutline
          className="mr-2 text-orange-600 text"
          style={{ fontSize: 48 }}
        />
        Carbon Credits
      </h1>
      <div>
        <ul className="flex items-center space-x-3">
          <li>
            <button className="p-2 rounded-md px-4" onClick={setNormal}>
              <GridViewOutlined
                style={{
                  fontSize: 40,
                  color: isCompact ? "grey" : orange[600],
                }}
              />
            </button>
            <button className="p-2 rounded-md px-4" onClick={setCompact}>
              <ViewCompactOutlined
                style={{
                  fontSize: 40,
                  color: isCompact ? orange[600] : "grey",
                }}
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DashboardHeader;
