import { ReactElement, ReactNode } from "react";

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
  title: string;
  actions?: ReactNode;
  headerIcon?: ReactNode;
}

function DashboardHeader({
  title,
  actions,
  headerIcon,
}: DashboardHeaderProps): ReactElement {
  return (
    <header className="flex items-center justify-between border-b-2 border-gray-300 h-24">
      <h1 className="text-4xl flex items-center ml-4">
        {headerIcon && <div>{headerIcon}</div>}
        {title}
      </h1>
      <div>
        <ul className="flex items-center space-x-3">
          {actions && <li>{actions}</li>}
        </ul>
      </div>
    </header>
  );
}

export default DashboardHeader;
