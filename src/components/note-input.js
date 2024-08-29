// src/components/note-input.js

class NoteInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("form").addEventListener("submit", (event) => this.handleAddNote(event));
  }

  handleAddNote(event) {
    event.preventDefault(); // Mencegah reload halaman

    const title = this.shadowRoot.querySelector("#title").value;
    const body = this.shadowRoot.querySelector("#body").value;

    // Dispatch event 'add-note' dengan data title dan body
    this.dispatchEvent(
      new CustomEvent("add-note", {
        detail: { title, body },
        bubbles: true,
        composed: true,
      })
    );

    // Reset input form setelah submit
    this.shadowRoot.querySelector("form").reset();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .note-input {
          display: flex;
          flex-direction: column;
        }
        input, textarea {
          margin-bottom: 8px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #6200ea;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #3700b3;
        }
      </style>
      <div class="note-input">
        <form>
          <input type="text" id="title" placeholder="Title" required />
          <textarea id="body" placeholder="Body" required></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    `;
  }
}

customElements.define("note-input", NoteInput);
