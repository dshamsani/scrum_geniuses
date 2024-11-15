import type { Dispatch, FC, SetStateAction } from "react";

import { X } from "lucide-react";

import { useState } from "react";

interface LogInProps {
  onClose?: () => void;
  setData: Dispatch<SetStateAction<any>>;
}

export const LogIn: FC<LogInProps> = ({ onClose, setData }) => {
  const [role, setRole] = useState<"Autor" | "Redaktor" | "Recenzent">("Autor");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
      setData({
        role,
        ...user,
      });
    }
  };

  return (
    <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto ">
      <div className="flex justify-between ">
        <h2 className="text-[#692267] text-center font-bold text-2xl mb-6">Log In</h2>
        <X className="text-[#692267] cursor-pointer" onClick={onClose} />
      </div>
      <div className="space-y-4">
        <div className="block text-[#692267] font-medium mb-2">
          <label className="block text-[#692267] font-medium mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "Autor" | "Redaktor" | "Recenzent")}
            className="w-full p-3 border  border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
          >
            <option value="Autor">Autor</option>
            <option value="Redaktor">Redaktor</option>
            <option value="Recenzent">Recenzent</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="block text-[#692267] font-medium mb-2">
            Login
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
            placeholder="Enter your login"
            onChange={(e) => setLogin(e.currentTarget.value)}
            required
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
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <button className="w-full bg-[#692267] text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
