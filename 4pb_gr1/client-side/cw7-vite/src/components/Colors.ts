export const Colors = (colors:string[]): HTMLSelectElement => {
    const select = document.createElement('select');
    select.addEventListener('change', (event) => {
        const target = event.target as HTMLSelectElement;
        document.body.style.backgroundColor = target.value;
    });
    colors.forEach((color) => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        select.appendChild(option);
    });
    return select;
};