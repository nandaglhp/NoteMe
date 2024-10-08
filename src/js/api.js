const BASE_URL = "https://notes-api.dicoding.dev/v2";

/**
 *
 * step:
 * 1. http req
 * 2. cek status
 * 3. Mengonversi Respons Menjadi Objek JSON
 * 4. return data
 */

// mengambil data catatan aktif dari API.
export const fetchNotes = async () => {
  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "block";
  try {
    // Debug log sebelum melakukan request
    // console.log("Fetching notes from:", `${BASE_URL}/notes`);
    // http req ke api
    const response = await fetch(`${BASE_URL}/notes`);
    // cek status respon
    // console.log("api respond ok: ", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Mengonversi Respons Menjadi Objek JSON
    const data = await response.json();
    // Debug log untuk memeriksa data yang diterima
    // console.log("Data received from API:", data);
    return data.data; // Mengembalikan array catatan
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  } finally {
    loadingIndicator.style.display = "none";
  }
};

// mengambil data catatan aktif dari API.
export const fetchArchivedNotes = async () => {
  try {
    const URL = "/notes/archived";
    // Debug log sebelum melakukan request
    // console.log("Fetching archived notes from:", `${BASE_URL}${URL}`);
    // http req ke api
    const response = await fetch(`${BASE_URL}${URL}`);
    // cek status respon
    // console.log("api respond ok: ", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Mengonversi Respons Menjadi Objek JSON
    const data = await response.json();
    // Debug log untuk memeriksa data yang diterima
    // console.log("Data received from API:", data);

    // dummy data
    // const dummyData = [
    //   {
    //     id: "notes-1",
    //     title: "Catatan Pertama",
    //     body: "Ini adalah catatan pertama yang diarsipkan.",
    //     createdAt: "2024-08-30T05:28:52.295Z",
    //     archived: true,
    //   },
    //   {
    //     id: "notes-2",
    //     title: "Catatan Kedua",
    //     body: "Ini adalah catatan kedua yang diarsipkan.",
    //     createdAt: "2024-08-30T06:15:10.123Z",
    //     archived: true,
    //   },
    // ];

    // console.log("Using dummy data for archived notes:", dummyData);

    // // Mengembalikan data dummy untuk diuji
    // return dummyData;
    return data.data; // Mengembalikan array catatan
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
};

// tambah catatan
export const createNote = async (title, body) => {
  try {
    const URL = "/notes";
    // Debug log sebelum melakukan request
    // console.log("Create note url:", `${BASE_URL}${URL}`);
    // http req ke api
    const response = await fetch(`${BASE_URL}${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    // cek status respon
    // console.log("api respond ok: ", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Mengonversi Respons Menjadi Objek JSON
    const data = await response.json();
    // Debug log untuk memeriksa data yang diterima
    // console.log("Data received from API:", data);

    return data.data; // Mengembalikan array catatan
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return null; // Mengembalikan array kosong jika terjadi kesalahan
  }
};

// mengambil data catatan aktif dari API.
export const getDetailNote = async (note_id) => {
  try {
    const URL = `/notes/${note_id}`;
    // Debug log sebelum melakukan request
    // console.log("Fetching single notes from:", `${BASE_URL}${URL}`);
    // http req ke api
    const response = await fetch(`${BASE_URL}${URL}`);
    // cek status respon
    // console.log("api respond ok: ", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Mengonversi Respons Menjadi Objek JSON
    const data = await response.json();
    // Debug log untuk memeriksa data yang diterima
    // console.log("Data received from API:", data);

    return data.data; // Mengembalikan array catatan
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
};

// hapus catatan
export const deleteNote = async (note_id) => {
  try {
    const URL = `/notes/${note_id}`; // Perbaiki noteId dari note_id
    console.log("Delete note url:", `${BASE_URL}${URL}`);
    const response = await fetch(`${BASE_URL}${URL}`, {
      method: "DELETE",
    });
    console.log("API respond ok:", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received from API:", data);

    return data.message; // Mengembalikan pesan
  } catch (error) {
    console.error("Failed to delete note:", error);
    return null; // Mengembalikan null jika terjadi kesalahan
  }
};
