export const MyHeader = ():HTMLHeadElement => {
    const header = document.createElement('h1');
    header.textContent = 'Hello World';
    return header;
};