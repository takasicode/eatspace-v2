class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="header">
            <div class="header_logo">
                <a href="#/home">EatSpace</a>
            </div>

            <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="button to open side menu"><i class="fas fa-bars"></i></button>

            <nav id="drawer" class="header_nav">
                <ul class="nav_list">
                    <li class="nav_item"><a href="#/home">Home</a></li>
                    <li class="nav_item"><a href="#/favorite">Favorites</a></li>
                    <li class="nav_item about_us"><a 
                        target="_blank" 
                        href="https://www.linkedin.com/in/muhammad-fadhil-abyansyah/"
                        rel="noopener noreferrer">
                        About Us</a>
                    </li>
                </ul>
            </nav>  
        </div>
        
        <div class="hero" id="hero">
          <div class="hero_group">
            <h1 class="hero_title">EatSpace</h1>
            <p class="hero_subtitle">
            The best places to eat recommended by eatspace!
            </p>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
