import { notesData } from "../utils/notesData.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app"); // Pastikan ada elemen dengan ID "app" di index.html

  // Iterasi melalui setiap catatan dan tampilkan di halaman
  notesData.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note"; // Tambahkan class untuk styling
    noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.body}</p>
            <small>Created At: ${new Date(note.createdAt).toLocaleString()}</small>
        `;
    app.appendChild(noteElement); // Tambahkan elemen ke dalam div dengan ID "app"
  });
});
