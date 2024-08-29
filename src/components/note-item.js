class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const body = this.getAttribute("body");
    const createdAt = this.getAttribute("createdAt");

    this.shadowRoot.innerHTML = `
        <style>
          .note-item {
            border: 1px solid #ddd;
            padding: 8px;
            margin-bottom: 8px;
            border-radius: 4px;
          }
          .note-item h3 {
            margin: 0;
          }
        </style>
        <div class="note-item">
          <h3>${title}</h3>
          <p>${body}</p>
          <small>${new Date(createdAt).toLocaleString()}</small>
        </div>
      `;
  }
}

customElements.define("note-item", NoteItem);
