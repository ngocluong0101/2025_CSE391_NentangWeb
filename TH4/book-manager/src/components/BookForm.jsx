import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Mỗi khi editingBook thay đổi, nạp dữ liệu vào form
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ!");
      return;
    }

    if (editingBook) {
      // Update
      onUpdate({
        ...editingBook,
        title,
        author,
        year: parseInt(year, 10),
      });
    } else {
      // Add
      const newBook = {
        id: Date.now(),
        title,
        author,
        year: parseInt(year, 10),
      };
      onAdd(newBook);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>
      <div>
        <label>Tiêu đề: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Tác giả: </label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Năm XB: </label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit">{editingBook ? "Cập nhật" : "Thêm"}</button>
    </form>
  );
}

export default BookForm;
