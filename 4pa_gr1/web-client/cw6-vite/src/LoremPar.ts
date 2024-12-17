export const  LoremPar = ():HTMLParagraphElement => {
    const par = document.createElement('p');
    par.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et dui ph';
    return par;
};