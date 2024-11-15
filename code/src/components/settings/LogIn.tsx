import { X } from "lucide-react";
import type { FC } from "react";

interface LogInProps {
  onClose?: () => void;
}

export const LogIn: FC<LogInProps> = ({ onClose }) => {
  return (
    <div className="bg-white border border-[#d5b6dc] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-4px_4px_rgba(0,0,0,0.25)] p-6 max-w-md mx-auto ">
      <div className="flex justify-between ">
        <h2 className="text-[#692267] text-center font-bold text-2xl mb-6">Log In</h2>
        <X className="text-[#692267] cursor-pointer" onClick={onClose} />
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-[#692267] font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-[#d5b6dc] rounded-lg focus:ring-2 focus:ring-[#692267] focus:outline-none"
            placeholder="Enter your email"
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
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-[#692267] text-white font-bold py-3 rounded-lg hover:bg-[#531b50] transition">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};
