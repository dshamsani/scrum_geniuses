import type { FC } from "react";

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const RegisterRedaktor: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    await fetch(`https://admin.scrumgeniuses.cloud/items/Redaktor/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jmeno: name,
        login,
        role: "Redaktor",
        heslo: password,
      }),
    })
      .then(() => {
        alert(`Successfuly registered as Redaktor`);
        navigate({
          to: "/login",
        });
      })
      .catch(() => {
        alert("Error during register.");
      });
  };

  return (
    <>
      <div>
        <label htmlFor="name" className="block text-primary font-medium mb-2">
          Jméno
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Vaše jméno"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-primary font-medium mb-2">
          Přihlašovací jméno
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          onChange={(e) => setLogin(e.currentTarget.value)}
          placeholder="Vaše přihlašovací jméno"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-primary font-medium mb-2">
          Heslo
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Vaše heslo"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition" onClick={handleLogin}>
          Registrovat
        </button>
      </div>
    </>
  );
};
