import { useRef, useState } from "react"
import isPrime from '../data/isPrime';


const PrimeChecker = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [info, setInfo] = useState('');
    // const [color, setColor] = useState('white');
  return (
    <div style={{
        padding: '20px',
        border: '1px solid #000',        
        margin: '20px auto'
        }}>
        <input ref={inputRef} type="number" placeholder="podaj liczbę" />
        <button>Sprawdź czy to liczba pierwsza</button>
        {info}
    </div>
  )
}

export default PrimeChecker