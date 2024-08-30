const BASE_URL = "https://notes-api.dicoding.dev/v2";

/**
 *
 * step:
 * 1. http req
 * 2. cek status
 * 3. Mengonversi Respons Menjadi Objek JSON
 */

// mengambil data catatan aktif dari API.
export const fetchNotes = async () => {
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
  }
};
