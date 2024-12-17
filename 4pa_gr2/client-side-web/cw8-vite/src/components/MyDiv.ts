export const MyDiv = (width: number, height: number, id: string = 'div')
     : HTMLDivElement => {
    const div = document.createElement('div');
    div.id = id;
    div.style.border = '1px solid black';
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    return div;
};