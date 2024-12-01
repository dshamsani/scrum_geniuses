import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setAuth] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isAuth, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
