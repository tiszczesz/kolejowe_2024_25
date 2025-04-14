

import { useState } from 'react';
import './App.css'
type Item = {
  id: number;
  name: string;
  selected: boolean;
};
function App() {
     const [items, setItems] = useState<Item[]>([
      { id: 1, name: 'Item 1', selected: false },
      { id: 2, name: 'Item 2', selected: false },
      { id: 3, name: 'Item 3', selected: false },
    ]);
  const toggleItemSelection = (id: number) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item
        )
      );
    };  
    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => toggleItemSelection(item.id)}>
              {item.selected ? 'Unselect' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    );
  
}

export default App
