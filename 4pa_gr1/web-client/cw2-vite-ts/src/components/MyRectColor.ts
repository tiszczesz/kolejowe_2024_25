export const MyRectColor = (color: string = 'black'):HTMLDivElement => {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '20px';
    div.style.backgroundColor = color;
    return div;
  };
