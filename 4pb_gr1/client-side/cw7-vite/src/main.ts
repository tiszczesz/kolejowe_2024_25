import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { App } from './components/App';
import { Nav } from './components/Nav';
import { Colors } from './components/Colors';
import { Rectangle } from './components/Rectangle';
import { MyRange } from './components/MyRange';
const root = document.querySelector<HTMLDivElement>('#app');
if (root) {
  root.className = 'container';
  root.appendChild(Nav());
  root.appendChild(App());
  root.appendChild(Colors(['white','red', 'green', 'blue']));
  root.appendChild(Rectangle(100, 200));
  root.appendChild(MyRange(0, 100));
  // root.appendChild(Colors(['white','blue', 'pink', 'yellow']));
}