import React from "react";
import Modal from "./Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  message = "Are you sure?",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <p className="mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="cursor-pointer bg-gray-300 px-4 py-1 rounded hover:bg-gray-400">
          No
        </button>
        <button
          onClick={onConfirm}
          className="cursor-pointer bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
