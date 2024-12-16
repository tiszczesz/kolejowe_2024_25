export const generSelect = (data: string[]):HTMLSelectElement => {
    const select = document.createElement('select');
    select.addEventListener('change', (e) => {
        const scene = document.querySelector<HTMLDivElement>('#scene')
        if(scene){
            scene.style.backgroundColor = select.value;
        }
    });
    for(const item of data){
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        select.appendChild(option);
    }
    return select;
}