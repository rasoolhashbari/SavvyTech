import React from "react";
import { Item } from "../utils/storage";

interface ItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) return <p>No items yet.</p>;

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="border p-4 rounded flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-gray-500 text-sm">
              Created at: {item.createdAt}
            </p>
            {item.editedAt && (
              <p className="text-gray-500 text-sm">
                Edited at: {item.editedAt}
              </p>
            )}
            <p>
              <strong>Title:</strong> {item.title}
            </p>
            <p>
              <strong>Subtitle:</strong> {item.subtitle}
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className="bg-yellow-400 px-2 py-1 rounded"
              onClick={() => onEdit(item)}>
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
