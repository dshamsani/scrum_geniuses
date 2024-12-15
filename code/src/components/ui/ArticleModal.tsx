import React, { FC } from "react";
import { X } from "lucide-react";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const ArticleModal: FC<ArticleModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white w-full max-w-[800px] p-4 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-200 focus:outline-none" aria-label="Close">
            <X size={24} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
