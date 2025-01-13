export const MySelect = (data:string[]):HTMLSelectElement =>{
    const select = document.createElement("select");    
    select.addEventListener("change",(event)=>{
        const elem  = event.target as HTMLSelectElement;
        document.body.style.backgroundColor = elem.value;
    });
    for(let elem of data){
        const option = document.createElement("option");
        option.textContent = elem;        
        option.value = elem;
        select.appendChild(option);
    }
    return select;
};