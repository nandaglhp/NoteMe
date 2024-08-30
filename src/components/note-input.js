class NoteInput extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <form id="note-form">
        <input type="text" id="note-title" placeholder="Title" required />
        <textarea id="note-body" placeholder="Write your note here..." required></textarea>
        <button type="submit">Add Note</button>
      </form>
    `;
  }

  connectedCallback() {
    this.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.querySelector("#note-title").value;
      const body = this.querySelector("#note-body").value;
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
