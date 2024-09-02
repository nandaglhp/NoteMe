class NoteInput extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <form id="note-form">
        <input type="text" id="noteTitle" placeholder="Title" required />
        <textarea id="noteBody" placeholder="Write your note here..." required></textarea>
        <button type="submit", id="createNoteButton">Add Note</button>
      </form>
    `;
  }

  connectedCallback() {
    this.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.querySelector("#noteTitle").value;
      const body = this.querySelector("#noteBody").value;
      this.dispatchEvent(
        new CustomEvent("note-submit", {
          detail: { title, body },
          bubbles: true,
        })
      );
    });
  }

  reset() {
    this.querySelector("#note-title").value = "";
    this.querySelector("#note-body").value = "";
  }
}

customElements.define("note-input", NoteInput);
