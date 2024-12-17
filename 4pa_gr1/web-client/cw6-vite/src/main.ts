import './style.css';
import { MyHeader } from './MyHeader';
import { LoremPar } from './LoremPar';
import { MyList } from './MyList';

const app = document.querySelector<HTMLDivElement>('#app');
const data = ['one', 'two', 'three', 'four', 'five'];
if (app) {
  app.appendChild(MyHeader());
  app.appendChild(LoremPar());
  app.appendChild(MyList('ul', data));
  app.appendChild(MyList('ol', data));
}
// napisac funkcje(komponent) MySelect ktora przyjmuje jako argument: items
// i zwraca  select z opcjami z items

