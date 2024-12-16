import type { FC } from "react";

import { ChevronDown } from "lucide-react";
import DropdownMenu from "../ui/Dropdown";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/Button";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const Header: FC = () => {
  const { isAuth, setAuth } = useAuth();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      setAuth(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <header className="w-full h-[120px] flex items-center justify-between shadow-custom-drop md:p-desktop p-mobile">
      <Link to="/">
        <div className="font-hoefler text-[40px] ">
          SCRUM <span className="text-primary">GENIUSES</span>
        </div>
      </Link>
      <div className="flex text-primary font-medium items-center gap-5">
        <Link to="/">
          <div className="flex items-center w-fit gap-1 cursor-pointer">
            <span>AKTUALITY</span>
          </div>
        </Link>
        <DropdownMenu />
        <Link to="/about">
          <span className="cursor-pointer">O NÁS</span>
        </Link>
        <Link to="/contact">
          <span className="cursor-pointer uppercase">Kontakty</span>
        </Link>
        <Link to="/archive">
          <span className="cursor-pointer uppercase">Archiv</span>
        </Link>
        <Link to="/journal">
          <div className="flex items-center w-fit gap-1 cursor-pointer">
            <span>VYDANI CASOPISU</span>
          </div>
        </Link>
      </div>
      {isAuth ? (
        <Button title="Odhlasit se" onClick={handleLogOut} />
      ) : (
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button title="Přihlásit se" />
          </Link>
          <Link to="/register">
            <Button title="Registrovat" />
          </Link>
        </div>
      )}
    </header>
  );
};
