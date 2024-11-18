## CSS Modules w React pozwalają na ograniczenie zakresu CSS poprzez automatyczne tworzenie unikalnych nazw klas. 
Oto jak można używać CSS Modules w projekcie React:

### Przewodnik krok po kroku

1. **Utwórz plik CSS Module**: Utwórz plik CSS z rozszerzeniem `.module.css`.
2. **Zaimportuj CSS Module w swoim komponencie React**: Zaimportuj plik CSS Module w swoim komponencie React.
3. **Zastosuj style używając zaimportowanego CSS Module**: Użyj zaimportowanego obiektu stylów, aby zastosować style do elementów JSX.

### Przykład

#### 1. Utwórz plik CSS Module
Utwórz plik o nazwie `Button.module.css`:

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}
```

#### 2. Zaimportuj CSS Module w swoim komponencie React
W pliku swojego komponentu React zaimportuj CSS Module:

```jsx
// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
```

#### 3. Użyj komponentu
Użyj komponentu `Button` w swojej aplikacji:

```jsx
// App.js
import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <Button label="Kliknij mnie" />
    </div>
  );
};

export default App;
```

### Podsumowanie
- **Plik CSS Module**: Utwórz plik CSS z rozszerzeniem `.module.css`.
- **Import CSS Module**: Zaimportuj CSS Module w swoim komponencie React.
- **Zastosuj style**: Użyj zaimportowanego obiektu stylów, aby zastosować style do elementów JSX.

Takie podejście zapewnia, że Twoje style są ograniczone lokalnie do komponentu, co zapobiega konfliktom z innymi stylami w aplikacji.