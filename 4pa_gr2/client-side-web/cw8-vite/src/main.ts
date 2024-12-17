import { MyDiv } from "./components/MyDiv";
import { MyH1 } from "./components/MyH1";
import { MyList } from "./components/MyList";
import { MyPar } from "./components/MyPar";
import { MySelect } from "./components/MySelect";
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
const names = ['Adam', 'Ewa', 'Kain', 'Abel'];
const colors = ['red', 'green', 'blue', 'yellow'];
// komponent MySelect do kolorów
// komponent MyDiv bedzie mial wysokosc i szerokosc jako argumenty oraz id
const container = document.createElement('div');
container.style.display = 'flex';
container.style.gap = '30px';
if(app){
  app.appendChild(MyH1('To jest nagłówkek h1'));
  app.appendChild(MyH1('Wesołych świąt!'));
  app.appendChild(MyPar('To jest paragraf', 'red'));
  app.appendChild(MyList('ul', names));
  app.appendChild(MyList('ol', colors));  
  app.appendChild(container);
  container.appendChild(MySelect(colors));
  container.appendChild(MyDiv(300, 300, 'myDiv'));
}
