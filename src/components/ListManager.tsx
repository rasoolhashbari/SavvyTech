"use client";

import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import ConfirmModal from "./ConfirmModal";
import {
  Item,
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../utils/storage";

const ListManager: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  useEffect(() => {
    setItems(getItems());
  }, []);

  const handleCreate = () => {
    setEditItem(null);
    setIsModalOpen(true);
  };

const handleSubmit = (data: { title: string; subtitle: string }) => {
  if (editItem) {
    const updated: Item = {
      ...editItem,
      ...data,
      editedAt: new Date().toLocaleString(),
    };
    updateItem(updated);
  } else {
    const newItem: Item = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toLocaleString(),
    };
    addItem(newItem);
  }
  setItems(getItems());
  setIsModalOpen(false);
};


  const handleEdit = (item: Item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteItemId(id);
  };

  const confirmDelete = () => {
    if (deleteItemId) {
      deleteItem(deleteItemId);
      setItems(getItems());
      setDeleteItemId(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">SavvyTech List Management</h1>
      <button
        onClick={handleCreate}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Create Item
      </button>
      <ItemList
        items={items}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      {/* Create / Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ItemForm initialData={editItem || undefined} onSubmit={handleSubmit} />
      </Modal>

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={!!deleteItemId}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteItemId(null)}
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default ListManager;
