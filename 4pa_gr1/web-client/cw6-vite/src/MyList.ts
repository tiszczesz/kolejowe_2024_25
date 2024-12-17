import { listType } from "./tools";

export const MyList = (type: listType, items: string[])
    : HTMLUListElement | HTMLOListElement => {
    const list = document.createElement(type);
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
    return list;
};