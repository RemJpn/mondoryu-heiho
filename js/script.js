const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/header.css">
    <nav class="mobile-navbar">
      <div class="mobile-navbar-menu">
        <div class="menu-logo">
          <img src="./images/Logo.png" alt="">
        </div>
        <img src="./images/Close.svg" alt="Fermer" id="navbar-close">
        <a href="./" class="navbar-link mondoryu">Mondō Ryū Heihō</a>
        <a href="./infos.htm" class="navbar-link shiseigumi">Shiseigumi</a>
        <a href="./histoire.htm" class="navbar-link histoire">Histoire</a>
        <a href="./medias.htm" class="navbar-link galerie">Galerie</a>
        <a href="./lexique.htm" class="navbar-link lexique">Lexique</a>
        <a href="./liens.htm" class="navbar-link liens">Liens</a>
      </div>
      <div class="mobile-navbar-bottom">
        <img src="./images/burgerIcon.svg" alt="Menu" id="navbar-burger">
        <img src="./images/logo_white_bg.png" alt="Logo du club" class="mobile-navbar-logo">
      </div>
    </nav>

    <div class="banner">
      <img src="./images/banner.png" alt="">
    </div>
    
    <nav class="desktop-navbar">
      <a href="./"><img src="./images/logo_white_bg.png" alt="Logo du club"></a>
      <a href="./" class="navbar-link mondoryu">Mondō Ryū Heihō</a>
      <a href="./infos.htm" class="navbar-link shiseigumi">Shiseigumi</a>
      <a href="./histoire.htm" class="navbar-link histoire">Histoire</a>
      <a href="./medias.htm" class="navbar-link galerie">Galerie</a>
      <a href="./lexique.htm" class="navbar-link lexique">Lexique</a>
      <a href="./liens.htm" class="navbar-link liens">Liens</a>
    </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const navbar = this.shadowRoot.querySelector(".mobile-navbar");
    this.shadowRoot
      .querySelector(".mobile-navbar-bottom")
      .addEventListener("click", () => {
        navbar.classList.add("mobile-navbar--open");
        document.body.classList.add("stop-scrolling");
      });
    this.shadowRoot
      .querySelector("#navbar-close")
      .addEventListener("click", () => {
        navbar.classList.remove("mobile-navbar--open");
        document.body.classList.remove("stop-scrolling");
      });
    const page = this.getAttribute("page");
    [...this.shadowRoot.querySelectorAll(`.${page}`)].map((link) =>
      link.classList.add("active-page")
    );
  }
}
window.customElements.define("my-header", Header);

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <link rel="stylesheet" href="./css/footer.css">
      <footer>
        <div class="footer-name">
          <span>Shiseigumi</span>
          <span class="desktop-only">士西組</span>
          <span class="desktop-only">Dōjō de bujutsu</span>
          
        </div>
        <a href="http://www.facebook.com/mondoryu" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 19 19">
            <path
              d="M15.834 0H3.167A3.177 3.177 0 000 3.167v12.666A3.176 3.176 0 003.167 19h12.667A3.175 3.175 0 0019 15.833V3.167A3.175 3.175 0 0015.834 0zm.32 9.5h-3.091v8.312H9.5V9.5H7.784V6.781H9.5V5.014c0-2.399 1.036-3.827 3.857-3.827h3.252V4.13h-2.656c-.788-.002-.886.411-.886 1.178l-.004 1.473h3.562L16.154 9.5z"
              fill="currentColor" />
          </svg>
        </a>
        <a href="mailto:shiseigumi@ntymail.com">Email</a>
      </footer>
    `;
  }
}
window.customElements.define("my-footer", Footer);
