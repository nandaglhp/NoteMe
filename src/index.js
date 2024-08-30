import { fetchNotes } from "./js/api.js";
import "./components/note-item.js";
import "./components/app-bar.js";
import "./components/note-input.js";

// Fungsi untuk menampilkan catatan
const displayNotes = (notes) => {
  const notesList = document.getElementById("note-list");
  notesList.innerHTML = ""; // Kosongkan daftar catatan sebelumnya

  console.log("List Notes to display:", notes);
  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    noteElement.setAttribute("createdAt", note.createdAt);
    noteElement.setAttribute("id", note.id);
    noteElement.setAttribute("archived", note.archived);
    notesList.appendChild(noteElement);
    console.log("Note to display:", note);
  });
};

// Saat aplikasi dimuat, ambil dan tampilkan catatan
document.addEventListener("DOMContentLoaded", async () => {
  const notes = await fetchNotes();
  displayNotes(notes);
});
