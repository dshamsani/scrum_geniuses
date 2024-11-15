import type { FC } from "react";

import { X } from "lucide-react";

interface RegisterProps {
  onClose?: () => void;
}

export const Register: FC<RegisterProps> = ({ onClose }) => {
  return (
    <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto">
      <div className="flex justify-between ">
        <h2 className="text-[#692267] text-center font-bold text-2xl mb-6">Register</h2>
        <X className="text-[#692267] cursor-pointer" onClick={onClose} />
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[#692267] font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
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
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-[#692267] font-medium mb-2">
            Confirm password
          </label>
          <input
            id="confirm-password"
            type="password"
            className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
            placeholder="Confirm password"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-[#692267] text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
