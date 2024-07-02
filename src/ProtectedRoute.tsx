import { ReactElement, ReactNode, useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const { token } = useContext(AuthenticationContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
