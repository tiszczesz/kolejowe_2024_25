export const MySelect = (data:string[]):HTMLSelectElement =>{
    const select = document.createElement("select");    
    for(let elem of data){
        const option = document.createElement("option");
        option.textContent = elem;        
        option.value = elem;
        select.appendChild(option);
    }
    return select;
};