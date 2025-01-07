import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import choinka from './images/choinka.jpg';
import { MyHeader } from './MyHeader';
import { LoremPar } from './LoremPar';
import { MyList } from './MyList';
import { MySelect } from './MySelect';

const app = document.querySelector<HTMLDivElement>('#app');
const data = ['one', 'two', 'three', 'four', 'five'];
const names = ['John', 'Paul', 'George', 'Ringo'];
const img = document.createElement('img');
img.src = choinka;
if (app) {
  app.appendChild(MyHeader());
  app.appendChild(LoremPar());
  app.appendChild(MyList('ul', data));
//  app.appendChild(MyList('ol', data));
  app.appendChild(MySelect(names));
  app.appendChild(img);
  app.appendChild(MyList('ol',["ffdfdfdfd","tyrtyrtyry","jjjjjjj"]))
}
// napisac funkcje(komponent) MySelect ktora przyjmuje jako argument: items
// i zwraca  select z opcjami z items

