import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { cars, mylist } from './data'
import { CarTableGener } from './CarTable'


const app = document.querySelector<HTMLDivElement>('#app');

const olGenerator = (mylist: string[]): HTMLOListElement => {
  const list = document.createElement('ol');
  list.className = 'list-group';
  mylist.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

if (app) {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello World';
  app.appendChild(h1);
  app.appendChild(olGenerator(mylist));
  app.appendChild(CarTableGener(cars));
}
