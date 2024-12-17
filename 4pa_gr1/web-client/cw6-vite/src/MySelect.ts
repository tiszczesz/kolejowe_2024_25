export const MySelect = (items: string[]): HTMLSelectElement => {
    const select = document.createElement('select');
    for (const item of items) {
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;
        select.appendChild(option);
    }
    return select;
};