import React, { useState, ReactNode } from "react";

interface AuthenticationContextInterface {
  token: string;
  setToken: (token: string) => void;
}

const initialState: AuthenticationContextInterface = {
  token: "",
  setToken: () => {},
};

export const AuthenticationContext =
  React.createContext<AuthenticationContextInterface>(initialState);

const AuthenticationProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  return (
    <AuthenticationContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
