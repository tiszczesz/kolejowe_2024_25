export const MyHeader = (content:string,className:string=""):HTMLDivElement =>{
    const header = document.createElement('h1');
    header.className = className;
    header.innerHTML = content;
    return header;
}
