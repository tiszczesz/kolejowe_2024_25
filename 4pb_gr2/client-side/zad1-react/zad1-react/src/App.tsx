import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BooksList from './components/BooksList';
import Basket from './components/Basket'; // Ensure this path is correct
import { useState } from 'react';
import { Book } from './data/books-data';

function App() {
  const [basketList, setBasketList] = useState<Book[]>([]);

  function addToBasket(book: Book): void {
    // Check if the book is already in the basket
    const isBookInBasket = basketList.some((b) => b.id === book.id);
    if (isBookInBasket) {
      alert("Książka już w koszyku");
      return;
    }
    setBasketList((prevList) => [...prevList, book]);
  }

  return (
    <main className='d-flex'>
       <BooksList handleAdd={addToBasket}  />
       <Basket basketList={basketList}  />
    </main>
  )
}

export default App
