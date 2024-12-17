import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { MyCard } from './components/MyCard';
import {  Recipes } from './dane/Services/Data';

const app = document.querySelector<HTMLDivElement>('#app');
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '1rem';
console.log(Recipes[0]);
const h1 = document.createElement('h1');
h1.textContent = "Wigilijne przepisy";
h1.style.textAlign = 'center';
h1.style.borderBottom = '1px solid black';

if(app){
  app.appendChild(h1);
    app.appendChild(container);
    for(const recipe of Recipes){
        container.appendChild(MyCard(recipe));
    }

    
}