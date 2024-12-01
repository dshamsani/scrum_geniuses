import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  isAuth: boolean;
  role: string | undefined;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setAuth] = useState<boolean>(
    (() => {
      const auth = localStorage.getItem("auth");

      return !!auth;
    })()
  );
  const [role, setRole] = useState<string | undefined>();

  useEffect(() => {
    if (isAuth) {
      const auth = localStorage.getItem("auth");

      if (auth) {
        const user = JSON.parse(auth);
        console.log("useEffect  user:", user);

        setRole(user.role);
        return;
      }
    }

    setRole(undefined);
  }, [isAuth]);

  return <AuthContext.Provider value={{ isAuth, role, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
