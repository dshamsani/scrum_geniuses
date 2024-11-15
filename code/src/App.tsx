import type { FC } from "react";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Button } from "./components/ui/Button";
import { LogIn } from "./components/settings/LogIn";
import { Register } from "./components/settings/Register";

import { useState } from "react";
import { format } from "date-fns";

export const App: FC = () => {
  const [authMode, setAuthMode] = useState<"logIn" | "register" | null>(null);
  const [data, setData] = useState<any | null>(null);

  return (
    <div className="font-helvetica min-h-[100vh] flex flex-col justify-between">
      <Header />
      {data === null ? (
        <div className="h-full flex items-center py-10 gap-3 justify-center">
          {authMode === null && (
            <>
              <Button title="Log in" onClick={() => setAuthMode("logIn")} />
              <Button title="Register" onClick={() => setAuthMode("register")} />
            </>
          )}
          {authMode === "logIn" && <LogIn onClose={() => setAuthMode(null)} setData={setData} />}
          {authMode === "register" && <Register onClose={() => setAuthMode(null)} />}
        </div>
      ) : (
        <div className="h-full flex flex-col items-center py-10 gap-3 justify-center">
          <div className="bg-white flex-col w-[400px]  flex items-center border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto">
            <div className="flex w-full gap-3 text-lg items-center">
              <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                Role:
              </label>
              <span className="block text-[#0a090a] text-sm font-medium mb-2">{data.role}</span>
            </div>
            {data?.date_created && (
              <div className="flex w-full  gap-3 text-lg items-center">
                <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                  Created At:
                </label>
                <span className="block text-[#0a090a] text-sm font-medium mb-2">{format(new Date(data.date_created), "dd-MM-yy")}</span>
              </div>
            )}
            {data?.jmeno && (
              <div className="flex w-full  gap-3 text-lg items-center">
                <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                  Name:
                </label>
                <span className="block text-[#0a090a] text-sm font-medium mb-2">{data.jmeno}</span>
              </div>
            )}
            {data?.login && (
              <div className="flex w-full  gap-3 text-lg items-center">
                <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                  Login:
                </label>
                <span className="block text-[#0a090a] text-sm font-medium mb-2">{data.login}</span>
              </div>
            )}
            {data?.kontaktni_udaje && (
              <div className="flex w-full  gap-3 text-lg items-center">
                <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                  Contact:
                </label>
                <span className="block text-[#0a090a] text-sm font-medium mb-2">{data.kontaktni_udaje}</span>
              </div>
            )}
            {data?.specializace && (
              <div className="flex w-full  gap-3 text-lg items-center">
                <label htmlFor="email" className="block w-[130px] text-[#692267] font-medium mb-2">
                  Specialization:
                </label>
                <span className="block text-[#0a090a] text-sm font-medium mb-2">{data.specializace}</span>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
