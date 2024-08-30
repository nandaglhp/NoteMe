const BASE_URL = "https://notes-api.dicoding.dev/v2";

// Fungsi untuk mengambil catatan yang tidak diarsipkan
export const fetchNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const result = await response.json();

    if (result.status === "success") {
      return result.data; // Mengembalikan data catatan
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};
