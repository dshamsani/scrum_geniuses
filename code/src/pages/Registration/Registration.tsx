import type { FC } from "react";

import { RegisterAutor } from "@/components/settings/roles/RegisterAutor";
import { RegisterRecezent } from "@/components/settings/roles/RegisterRecezent";
import { RegisterRedaktor } from "@/components/settings/roles/RegisterRedaktor";

import { useState } from "react";

export const Registration: FC = () => {
  const [role, setRole] = useState<"Autor" | "Redaktor" | "Recenzent">("Autor");

  return (
    <main className="py-8">
      <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto">
        <div className="flex justify-between ">
          <h2 className="text-primary text-center font-bold text-2xl mb-6">Registrace</h2>
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
          {role === "Autor" && <RegisterAutor />}
          {role === "Redaktor" && <RegisterRedaktor />}
          {role === "Recenzent" && <RegisterRecezent />}
        </div>
      </div>
    </main>
  );
};
