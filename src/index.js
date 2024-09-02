import { fetchNotes, fetchArchivedNotes, createNote } from "./js/api.js";
import "./components/note-item.js";
import "./components/app-bar.js";
import "./components/note-input.js";

// // Fungsi untuk menampilkan catatan
// const displayNotes = (notes) => {
//   const notesList = document.getElementById("note-list");
//   notesList.innerHTML = ""; // Kosongkan daftar catatan sebelumnya

//   // console.log("List Notes to display:", notes);
//   notes.forEach((note) => {
//     const noteElement = document.createElement("note-item");
//     noteElement.setAttribute("title", note.title);
//     noteElement.setAttribute("body", note.body);
//     noteElement.setAttribute("createdAt", note.createdAt);
//     noteElement.setAttribute("id", note.id);
//     noteElement.setAttribute("archived", note.archived);
//     notesList.appendChild(noteElement);
//     // console.log("Note to display:", note);
//   });
// };

// const displayArchivedNotes = (archivedNotes) => {
//   const archivedList = document.getElementById("archived-list");
//   archivedList.innerHTML = ""; // Kosongkan daftar catatan sebelumnya

//   // console.log("List Notes to display:", notes);
//   archivedNotes.forEach((note) => {
//     const noteElement = document.createElement("note-item");
//     noteElement.setAttribute("title", note.title);
//     noteElement.setAttribute("body", note.body);
//     noteElement.setAttribute("createdAt", note.createdAt);
//     noteElement.setAttribute("id", note.id);
//     noteElement.setAttribute("archived", note.archived);
//     archivedList.appendChild(noteElement);
//     // console.log("Note to display:", note);
//   });
// };

// // Saat aplikasi dimuat, ambil dan tampilkan catatan
// document.addEventListener("DOMContentLoaded", async () => {
//   // active notes
//   const notes = await fetchNotes();
//   displayNotes(notes);
//   // archived notes
//   const archivedNotes = await fetchArchivedNotes();
//   displayArchivedNotes(archivedNotes);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const createNoteButton = document.getElementById("createNoteButton");
//   createNoteButton.addEventListener("click", async () => {
//     const title = document.getElementById("noteTitle").value;
//     const body = document.getElementById("noteBody").value;

//     // Pastikan input tidak kosong
//     if (!title || !body) {
//       alert("Title and body are required.");
//       return;
//     }

//     // Panggil fungsi API untuk membuat catatan baru
//     const newNote = await createNote(title, body);

//     if (newNote) {
//       alert("Note created successfully!");
//       // Tambahkan logika untuk menampilkan catatan yang baru dibuat, jika diperlukan
//       addNoteToDOM(newNote);
//       console.log("New Note Created:", newNote);
//     } else {
//       alert("Failed to create note.");
//     }
//   });
// });

// // Fungsi untuk menambahkan catatan baru ke dalam DOM
// function addNoteToDOM(note) {
//   const noteList = document.getElementById("note-list"); // Elemen yang menampung daftar catatan
//   const noteItem = document.createElement("note-item");

//   noteItem.setAttribute("id", note.id);
//   noteItem.setAttribute("title", note.title);
//   noteItem.setAttribute("body", note.body);
//   noteItem.setAttribute("createdAt", note.createdAt);

//   noteList.appendChild(noteItem);
// }

// Fungsi untuk menampilkan catatan
const displayNotes = (notes) => {
  const notesList = document.getElementById("note-list");
  if (!notesList) return; // Pastikan elemen ada

  notesList.innerHTML = ""; // Kosongkan daftar catatan sebelumnya

  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    noteElement.setAttribute("createdAt", note.createdAt);
    noteElement.setAttribute("id", note.id);
    noteElement.setAttribute("archived", note.archived);
    notesList.appendChild(noteElement);
  });
};

const displayArchivedNotes = (archivedNotes) => {
  const archivedList = document.getElementById("archived-list");
  if (!archivedList) return; // Pastikan elemen ada

  archivedList.innerHTML = ""; // Kosongkan daftar catatan sebelumnya

  archivedNotes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    noteElement.setAttribute("createdAt", note.createdAt);
    noteElement.setAttribute("id", note.id);
    noteElement.setAttribute("archived", note.archived);
    archivedList.appendChild(noteElement);
  });
};

// Fungsi untuk menambahkan catatan baru ke dalam DOM
const addNoteToDOM = (note) => {
  const noteList = document.getElementById("note-list"); // Elemen yang menampung daftar catatan
  if (!noteList) return; // Pastikan elemen ada

  const noteItem = document.createElement("note-item");
  noteItem.setAttribute("id", note.id);
  noteItem.setAttribute("title", note.title);
  noteItem.setAttribute("body", note.body);
  noteItem.setAttribute("createdAt", note.createdAt);

  noteList.appendChild(noteItem);
};

// Saat aplikasi dimuat, ambil dan tampilkan catatan
document.addEventListener("DOMContentLoaded", async () => {
  // Ambil dan tampilkan catatan aktif dan terarsip
  try {
    const notes = await fetchNotes();
    displayNotes(notes);

    const archivedNotes = await fetchArchivedNotes();
    displayArchivedNotes(archivedNotes);
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }

  // Event listener untuk membuat catatan
  const createNoteButton = document.getElementById("createNoteButton");
  if (createNoteButton) {
    createNoteButton.addEventListener("click", async () => {
      const title = document.getElementById("noteTitle").value;
      const body = document.getElementById("noteBody").value;

      // Pastikan input tidak kosong
      if (!title || !body) {
        alert("Title and body are required.");
        return;
      }

      // Panggil fungsi API untuk membuat catatan baru
      try {
        const newNote = await createNote(title, body);

        if (newNote) {
          alert("Note created successfully!");
          addNoteToDOM(newNote);

          // Kosongkan input setelah catatan dibuat
          document.getElementById("noteTitle").value = "";
          document.getElementById("noteBody").value = "";

          console.log("New Note Created:", newNote);
        } else {
          alert("Failed to create note.");
        }
      } catch (error) {
        console.error("Error creating note:", error);
        alert("An error occurred while creating the note.");
      }
    });
  }
});
