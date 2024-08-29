class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .app-bar {
                    background-color: #6200ea;
                    color: white;
                    padding: 16px;
                    text-align: center;
                    font-size: 24px;
                }
            </style>
            <div class="app-bar">
                Notes App
            </div>
        `;
  }
}

customElements.define("app-bar", AppBar);
