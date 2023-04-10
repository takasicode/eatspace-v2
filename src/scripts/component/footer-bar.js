class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright © <span id="year"></span> EatSpace. All Right Reserved</p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
