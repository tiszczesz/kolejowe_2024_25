export const generSelect = (data: string[]):HTMLSelectElement => {
    const select = document.createElement('select');
    for(const item of data){
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        select.appendChild(option);
    }
    return select;
}