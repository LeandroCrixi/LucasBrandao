const header = () => {
  // Create <nav>
  const nav = document.querySelector('.navbar')

  // Create burger menu
  const burger = document.createElement('div');
  burger.className = 'burger';
  burger.id = 'burger';

  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    burger.appendChild(span);
  }

  // Create nav links
  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';
  navLinks.id = 'nav-links';

  // Define menu items
  const menuItems = [
    { text: 'Biografia do Artista', href: '' },
    { text: 'Foto', href: '' },
    { text: 'Impressa + Destaques', href: '' }
  ];

  // Add menu items to <ul>
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  // Append burger and nav links to nav
  nav.appendChild(burger);
  nav.appendChild(navLinks);
}

export { header }
