export const namesListGener = (data:string[]):HTMLOListElement => {
    const ol = document.createElement('ol');
    ol.className = 'list-group';
    for (const name of data) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = name;
        ol.appendChild(li);
    }
    return ol;
}