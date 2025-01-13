export const Nav = (): HTMLElement => {
    const nav = document.createElement('nav');
    nav.className = 'my-nav';
    const item1 = document.createElement('a');
    item1.href = '#';
    item1.innerHTML = 'Home';
    nav.appendChild(item1);
    const item2 = document.createElement('a');
    item2.href = 'https://www.google.com';
    item2.innerHTML = 'About';
    nav.appendChild(item2);
    return nav;
}