class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute("id");
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
          .note-item a {
            text-decoration: none;
            color: inherit;
          }
          .note-item a:hover {
            text-decoration: underline;
          }
        </style>
        <div class="note-item">
          <h3><a href="/detail.html?note_id=${id}">${title}</a></h3>
          <p>${body}</p>
          <small>${new Date(createdAt).toLocaleString()}</small>
        </div>
      `;
  }
}

customElements.define("note-item", NoteItem);
