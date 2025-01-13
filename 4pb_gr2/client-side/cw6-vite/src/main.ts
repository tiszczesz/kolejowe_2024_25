import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { MySelect } from './components/MySelect';
import fetchPosts from './Models/fetchPosts';
import { PostsList } from './components/PostsList';

const app = document.querySelector<HTMLDivElement>("#app");
if(app){
  app.appendChild(Home("Nagłówek strony"));
  app.appendChild(MySelect(['white','red','green','blue']));
  const posts = await  fetchPosts();
  app.appendChild(PostsList(posts));
}
