export const Rectangle = (width: number, height: number): HTMLDivElement => {
    const rectangle = document.createElement('div');
    rectangle.style.border = 'solid 1px black';
    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;    
    return rectangle;
}