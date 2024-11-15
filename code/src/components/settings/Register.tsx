import type { FC } from "react";

import { X } from "lucide-react";

import { RegisterAutor } from "./roles/RegisterAutor";
import { RegisterRedaktor } from "./roles/RegisterRedaktor";
import { RegisterRecezent } from "./roles/RegisterRecezent";

import { useState } from "react";

interface RegisterProps {
  onClose?: () => void;
}

export const Register: FC<RegisterProps> = ({ onClose }) => {
  const [role, setRole] = useState<"Autor" | "Redaktor" | "Recenzent">("Autor");

  return (
    <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto">
      <div className="flex justify-between ">
        <h2 className="text-[#692267] text-center font-bold text-2xl mb-6">Registrace</h2>
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
        {role === "Autor" && <RegisterAutor onClose={onClose} />}
        {role === "Redaktor" && <RegisterRedaktor onClose={onClose} />}
        {role === "Recenzent" && <RegisterRecezent onClose={onClose} />}
      </div>
    </div>
  );
};
