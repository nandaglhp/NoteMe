const BASE_URL = "https://notes-api.dicoding.dev/v2";

export const fetchNotes = async () => {
  try {
    // Debug log sebelum melakukan request
    console.log("Fetching notes from:", `${BASE_URL}/notes`);
    const response = await fetch(`${BASE_URL}/notes`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // Debug log untuk memeriksa data yang diterima
    console.log("Data received from API:", data);
    return data.data; // Mengembalikan array catatan
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
};
