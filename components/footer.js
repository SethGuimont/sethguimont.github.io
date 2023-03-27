const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
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
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }

    .social-row {
      font-size: 20px;
    }

    .social-row li a {
      margin: 0 15px;
    }
    
    @media only screen and  (max-width:600px) {
       ul li {
          list-style: none;
          display:block;
       }
       footer {
          height: 80px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
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
        footer {
          height: 80px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
          background-image: linear-gradient(to left, #bdc3c7, #2c3e50);
    } 
  }
  
  @media only screen and (-webkit-min-device-pixel-ratio: 2.75) {
            body {
            text-align: center;
        }
        ul li {
            list-style: none;
            display:block;
    }
        footer {
          height: 100px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
          background-image: linear-gradient(to left, #bdc3c7, #2c3e50);
    } 
     .social-row {
      font-size: 30px;
    }
} 
  
  </style>
  <footer>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="https://github.com/SethGuimont"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/seth-guimont-1a8227121"><i class="fab fa-linkedin"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);

