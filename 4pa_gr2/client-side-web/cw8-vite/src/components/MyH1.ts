export const MyH1 = (content:string):HTMLHeadElement =>{
    const h1 = document.createElement('h1');
    h1.textContent = content;
    return h1;
};