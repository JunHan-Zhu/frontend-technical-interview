import React, { ReactElement, ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function Layout({
  title,
  children,
  headerActions,
  headerIcon,
}: {
  title: string;
  children: ReactNode;
  headerActions?: ReactNode;
  headerIcon?: ReactNode;
}): ReactElement {
  return (
    <div className="flex-grow flex min-h-screen bg-purple-100">
      <DashboardSidebar />
      <section className="flex-grow">
        <DashboardHeader
          title={title}
          actions={headerActions}
          headerIcon={headerIcon}
        />
        {children}
      </section>
    </div>
  );
}

export default Layout;
