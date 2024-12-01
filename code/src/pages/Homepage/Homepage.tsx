import type { FC } from "react";

import { useAuth } from "@/context/AuthContext";

export const Homepage: FC = () => {
  const { role } = useAuth();
  console.log("role:", role);

  return <div>Hello, {role ? role : "Ctenar"}!</div>;
};
