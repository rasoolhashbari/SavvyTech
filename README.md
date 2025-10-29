# 📝 SavvyTech List Management

A simple **Next.js 16** frontend application to **create, view, edit, and delete items**.  
Data is stored in **LocalStorage** and forms use **React Hook Form** for validation.

---

## ✨ Features

- **List View**
  - Shows **Title**, **Subtitle**, **Created At**, and **Edited At** (if edited)
  - Each item has **Edit** and **Delete** buttons
- **Create Item**
  - Modal form with validation
  - **Title**: required, min 2 characters
  - **Subtitle**: required, min 5 characters
  - Adds current timestamp
- **Edit Item**
  - Modal pre-filled with item data
  - Updates item and sets **Edited At**
- **Delete Item**
  - Confirmation modal before deletion
- **UI/UX**
  - Modal with light transparent background (`bg-opacity-10`)  
  - Smooth fade and scale effect  
  - TailwindCSS styling

  