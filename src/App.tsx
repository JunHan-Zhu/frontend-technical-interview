import AuthenticationProvider from "./AuthenticationContext";
import ProtectedRoute from "./ProtectedRoute";
import ProjectsProvider from "./ProjectsContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CarbonsContainer, CarbonProjectDetails } from "./components/Carbon";
import { Login } from "./components/Login";

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
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/carbon-credits"
              element={
                <ProtectedRoute>
                  <CarbonsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carbon-credits/:projectId"
              element={
                <ProtectedRoute>
                  <CarbonProjectDetails />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </ProjectsProvider>
    </AuthenticationProvider>
  );
}

export default App;
