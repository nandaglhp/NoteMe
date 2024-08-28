import { notesData } from "../utils/notesData.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const form = document.getElementById("note-form");
  const notesList = document.getElementById("notes-list");

  // Fungsi untuk menampilkan catatan
  const displayNotes = () => {
    notesList.innerHTML = ""; // Kosongkan konten sebelumnya
    notesData.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.body}</p>
                <small>Created At: ${new Date(note.createdAt).toLocaleString()}</small>
            `;
      notesList.appendChild(noteElement);
    });
  };

  // Tampilkan catatan saat halaman dimuat
  displayNotes();

  // Event listener untuk menangani submit formulir
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input
    const title = document.getElementById("note-title").value;
    const body = document.getElementById("note-body").value;

    // Tambahkan catatan baru ke array notesData
    const newNote = {
      id: `notes-${Date.now()}`, // ID unik berdasarkan timestamp
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    notesData.push(newNote); // Tambahkan catatan baru ke data

    // Tampilkan ulang catatan yang telah diperbarui
    displayNotes();

    // Reset formulir setelah submit
    form.reset();
  });
});
