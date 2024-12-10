import './style.css';
import { names } from './models/data';

const app = document.querySelector<HTMLDivElement>('#app');
const generateList = (data: string[]) => {
  const ol = document.createElement('ol');
  ol.id = 'names';
  for (const item of data) {
    const li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
  }
  return ol;
}
const divAdd = (): HTMLDivElement => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'name';
  const button = document.createElement('button');
  button.textContent = 'Add';
  button.addEventListener('click',()=>{
    const name = input.value;
    console.log(name);
    names.push(name);
    const ol = document.querySelector<HTMLUListElement>('#names');
    if(ol){
      app?.removeChild(ol);
      app?.appendChild(generateList(names));
      input.value = '';
    }
  });
  div.appendChild(input);
  div.appendChild(button);
  return div;
}
if (app) {
  app.appendChild(divAdd());
  app.appendChild(generateList(names));
}


