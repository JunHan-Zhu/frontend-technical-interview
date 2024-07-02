import AuthenticationProvider from "./AuthenticationContext";
import LandingPage from "./LandingPage";
import ProjectsProvider from "./ProjectsContext";
import Login from "./components/Login";

/**
 * TODO:
 *
 * - Implement login functionality in the Login component.
 * - Redirect the user to the Dashboard component or show a <Carbons /> component after successful login.
 * - Implement all the provided tasks in the Carbons component.
 * - Implement logout functionality in the <DashboardHeader/> component and redirect the user to the Login component after logout.
 */
function App() {
  return (
    <AuthenticationProvider>
      <ProjectsProvider>
        <LandingPage />
      </ProjectsProvider>
    </AuthenticationProvider>
  );
}

export default App;
