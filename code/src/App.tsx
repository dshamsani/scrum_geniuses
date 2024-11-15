import type { FC } from "react";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Button } from "./components/ui/Button";
import { LogIn } from "./components/settings/LogIn";
import { Register } from "./components/settings/Register";

import { useState } from "react";

export const App: FC = () => {
  const [authMode, setAuthMode] = useState<"logIn" | "register" | null>(null);

  return (
    <div className="font-helvetica min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="h-full flex items-center py-10 gap-3 justify-center">
        {authMode === null && (
          <>
            <Button title="Log in" onClick={() => setAuthMode("logIn")} />
            <Button title="Register" onClick={() => setAuthMode("register")} />
          </>
        )}
        {authMode === "logIn" && <LogIn onClose={() => setAuthMode(null)} />}
        {authMode === "register" && <Register onClose={() => setAuthMode(null)} />}
      </div>
      <Footer />
    </div>
  );
};
