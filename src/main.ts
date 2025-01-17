import './style.scss'

async function loadHTMLFragment(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

async function loadHTMLFragments() {
  const header = await loadHTMLFragment('/src/components/header/header.html');
  const main = await loadHTMLFragment('/src/components/main/main.html');
  const footer = await loadHTMLFragment('/src/components/footer/footer.html');

  const app = document.getElementById('app');
  if(app) {
    app.innerHTML = header + main + footer;
    
    const navbar = document.querySelector<HTMLElement>('.header__nav');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }
}

loadHTMLFragments();