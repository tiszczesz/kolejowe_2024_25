export const Home = (content:string) :HTMLElement=> {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = content;
    h1.style.textAlign = "center";
    header.appendChild(h1);
    return header;
}