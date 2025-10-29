import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0000009c] bg-opacity-10 flex justify-center items-center z-50
                 transition-opacity duration-300">
      <div className="bg-white pt-10 p-6 rounded-lg shadow-lg w-96 relative transform transition-transform duration-300 scale-95">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 pb-5">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
