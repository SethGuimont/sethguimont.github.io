const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to left, #bdc3c7, #2c3e50);
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
    
     @media only screen and  (max-width:600px) {
        ul li {
            list-style: none;
            display:block;
        }
      
        nav {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(to left, #bdc3c7, #2c3e50);
        }
    }
    
        @media only screen and  (min-width: 320px) and (max-width: 480px) {
            body {
                text-align: center;
            }
           ul li {
                list-style: none;
                display:block;
            }
    
           nav {
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: linear-gradient(to left, #bdc3c7, #2c3e50);
            }
  }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
