export interface Item {
  id: string;
  title: string;
  subtitle: string;
  createdAt: string;
  editedAt?: string;
}

const STORAGE_KEY = "savvytech_items";

export const getItems = (): Item[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveItems = (items: Item[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const addItem = (item: Item) => {
  const items = getItems();
  items.push(item);
  saveItems(items);
};

export const updateItem = (updated: Item) => {
  const items = getItems().map((item) =>
    item.id === updated.id ? updated : item
  );
  saveItems(items);
};

export const deleteItem = (id: string) => {
  const items = getItems().filter((item) => item.id !== id);
  saveItems(items);
};
