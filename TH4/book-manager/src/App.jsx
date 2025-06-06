// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "React Cơ Bản", author: "Nguyễn Văn A", year: 2023 },
    { id: 2, title: "JavaScript Nâng Cao", author: "Trần Thị B", year: 2022 },
  ]);

  // Load từ localStorage khi component mount
  useEffect(() => {
    const stored = localStorage.getItem("books");
    if (stored) {
      setBooks(JSON.parse(stored));
    }
  }, []);

  // Lưu mỗi khi books thay đổi
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const [editingBook, setEditingBook] = useState(null);

  // Hàm thêm sách
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Hàm cập nhật
  const handleUpdateBook = (updatedBook) => {
    const newList = books.map((b) =>
      b.id === updatedBook.id ? updatedBook : b
    );
    setBooks(newList);
    setEditingBook(null); // Thoát chế độ sửa
  };

  // Khi bấm nút "Sửa" trong BookList
  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    const newList = books.filter((b) => b.id !== id);
    setBooks(newList);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Quản Lý Sách</h1>
      <BookForm
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
      />
      <BookList
        books={books}
        onEdit={handleEditClick}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export default App;
