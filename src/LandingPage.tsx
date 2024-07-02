import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { Login } from "./components/Login";
import Carbons from "./components/Carbons";
import CarbonsContainer from "./components/CarbonsContainer";

function LandingPage() {
  const { token } = useContext(AuthenticationContext);

  if (token) {
    return <CarbonsContainer />;
  }

  return <Login />;
}

export default LandingPage;
