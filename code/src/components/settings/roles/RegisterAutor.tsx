import type { FC } from "react";

import { useState } from "react";

interface RegisterAutorProps {
  onClose?: () => void;
}

export const RegisterAutor: FC<RegisterAutorProps> = ({ onClose }) => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleLogin = async () => {
    await fetch(`https://admin.scrumgeniuses.cloud/items/Autor/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jmeno: name,
        login,
        heslo: password,
        kontaktni_udaje: email,
      }),
    }).then(() => {
      alert(`Successfuly registered as Autor`);
      if (onClose) {
        onClose();
      }
    });
  };

  return (
    <>
      <div>
        <label htmlFor="name" className="block text-[#692267] font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[#692267] font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
          placeholder="Your email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-[#692267] font-medium mb-2">
          Login
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
          onChange={(e) => setLogin(e.currentTarget.value)}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-[#692267] font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
          placeholder="Your password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        <button className="w-full bg-[#692267] text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition" onClick={handleLogin}>
          Register
        </button>
      </div>
    </>
  );
};
