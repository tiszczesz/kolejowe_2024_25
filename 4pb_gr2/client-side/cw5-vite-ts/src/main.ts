import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { namesListGener } from './NamesList';
import { names } from './data';


const app = document.querySelector<HTMLDivElement>('#app');
console.log(app);

if (app) {
  const div1 = document.createElement('div');
  div1.innerText = 'Hello World';
  app.appendChild(div1);
  app.appendChild(namesListGener(names))
}


