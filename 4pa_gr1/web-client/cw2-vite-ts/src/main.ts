import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { MyHeader } from './components/MyHeader';
import { getTodos } from './data/getTodos';
import { TodosTable } from './components/TodosTable';
import { MyRectColor } from './components/MyRectColor';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(MyHeader('<h1>Witamy w roku 2025</h1>', "myHeader"));
  const todos = await getTodos();
  app.appendChild(TodosTable(todos));
  app.appendChild(MyRectColor('green'));
  app.appendChild(MyRectColor('red'));
  app.appendChild(MyRectColor('blue'));
}
