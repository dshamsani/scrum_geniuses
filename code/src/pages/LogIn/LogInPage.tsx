import type { FC } from "react";

import { useState } from "react";

export const LogInPage: FC = () => {
  const [role, setRole] = useState<"Autor" | "Redaktor" | "Recenzent">("Autor");
  const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(`https://admin.scrumgeniuses.cloud/items/${role}?filter[login][_eq]=${login}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("some error");
    }

    const data = await response.json();

    if (data.data.length === 0) {
      alert("Cant find user");
    }

    const user = data.data[0];

    if (user) {
      console.log(user);
    }
  };

  return (
    <main className="py-8">
      <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto ">
        <div className="flex justify-between ">
          <h2 className="text-primary text-center font-bold text-2xl mb-6">Přihlášení</h2>
        </div>
        <div className="space-y-4">
          <div className="block text-primary font-medium mb-2">
            <label className="block text-primary font-medium mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "Autor" | "Redaktor" | "Recenzent")}
              className="w-full p-3 border  border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="Autor">Autor</option>
              <option value="Redaktor">Redaktor</option>
              <option value="Recenzent">Recenzent</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-primary font-medium mb-2">
              Přihlašovací jméno
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Zadejte své přihlašovací jméno"
              onChange={(e) => setLogin(e.currentTarget.value)}
              required
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
              placeholder="Zadejte své heslo"
              // onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition" onClick={handleLogin}>
              Přihlásit se
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
