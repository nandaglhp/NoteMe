import { notesData } from "../utils/notesData.js";
import "../components/note-item.js";
import "../components/app-bar.js";
import "../components/note-input.js";

document.addEventListener("DOMContentLoaded", () => {
  const notesList = document.getElementById("note-list");

  // Fungsi untuk menampilkan catatan
  const displayNotes = () => {
    notesList.innerHTML = ""; // Kosongkan konten sebelumnya
    notesData.forEach((note) => {
      const noteElement = document.createElement("note-item");
      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      noteElement.setAttribute("createdAt", note.createdAt);
      console.log("Appending note:", noteElement); // Log elemen yang ditambahkan
      notesList.appendChild(noteElement);
    });
  };

  // Panggil fungsi untuk menampilkan catatan saat halaman dimuat
  displayNotes();

  // Event listener untuk menangani submit formulir
  document.querySelector("note-input").addEventListener("add-note", (event) => {
    const { title, body } = event.detail;
    const createdAt = new Date().toISOString();

    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("title", title);
    noteElement.setAttribute("body", body);
    noteElement.setAttribute("createdAt", createdAt);

    notesList.appendChild(noteElement);
  });
});
