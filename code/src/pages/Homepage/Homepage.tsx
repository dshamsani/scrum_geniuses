import type { Autor } from "@/types/autor";
import type { FC } from "react";

import { AutorHomepage } from "@/components/homepage/AutorHomepage";
import { ActualsHomepage } from "@/components/homepage/ActualsHomepage";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const Homepage: FC = () => {
  const { role } = useAuth();
  const [user, setUser] = useState<Autor>();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (role && auth) {
      const userAuth = JSON.parse(auth);

      setUser(userAuth);
    }
  }, [role]);

  if (role === "Autor") {
    return <AutorHomepage user={user} />;
  }

  return <ActualsHomepage />;
};
