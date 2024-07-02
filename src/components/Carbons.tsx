import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { NormalCardContainer, CompactCardContainer } from "./Cards";
import DashboardHeader from "./DashboardHeader";

/**
 * TODO:
 *
 * 1. Initialize the component:
 *    a. On component mount, asynchronously fetch carbon credits data from the provided API endpoint.
 *    b. Store the fetched project data in a React context for global state management, ensuring data can be accessed by any component in the application.
 *    c. Render the carbon credits dynamically based on the number of carbon credits returned by the API. Use the NormalCard component to display each carbon credits by default.
 *
 * 2. Implement view toggling functionality:
 *    a. Add a toggle button to the UI that allows users to switch between two views: Normal and Compact (Already implemented in the snippet).
 *    b. Define state to keep track of the current view mode (Normal or Compact).
 *    c. Implement event handlers to update the view mode state when the button is clicked.
 *    d. Conditionally render the carbon credits cards using either the NormalCard or CompactCard component based on the current view mode.
 *
 */

const Carbons = () => {
  const [isCompact, setIsCompact] = useState(false);

  const setCompact = () => {
    setIsCompact(true);
  };

  const setNormal = () => {
    setIsCompact(false);
  };

  return (
    <div className="flex-grow flex min-h-screen bg-purple-100">
      <DashboardSidebar />
      <section className="flex-grow">
        <DashboardHeader
          isCompact={isCompact}
          setCompact={setCompact}
          setNormal={setNormal}
        />

        <main className="m-6">
          {isCompact ? <CompactCardContainer /> : <NormalCardContainer />}
        </main>
      </section>
    </div>
  );
};

export default Carbons;
