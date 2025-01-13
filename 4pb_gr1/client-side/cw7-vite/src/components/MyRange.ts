export const MyRange = (min: number, max: number, value:number=0,step: number=1): HTMLInputElement => {
    const range = document.createElement('input');
    range.type = 'range';
    range.min = min.toString();
    range.value = value.toString();
    range.max = max.toString();
    range.step = step.toString();
    range.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        console.log(target.value);
    });
    return range;
}