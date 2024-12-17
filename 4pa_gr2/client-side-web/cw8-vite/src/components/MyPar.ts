export const MyPar = (content:string,color:string):HTMLParagraphElement =>{
    const par = document.createElement('p');
    par.textContent = content;
    par.style.color = color;
    return par;
};