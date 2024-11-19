//1. wykorzystujac funkcje napisz aplikacje generujaca 
//   ustalona liczbe losowych liczb z przedzialu 1-100000 --> pierwsza funkcja
//2.  napisz funkcje sprawdzajaca czy dana liczba jest liczba pierwsza --> druga funkcja
//3.  wykorzystaj funkcje 2 do wyfiltrowania
//    wszystkich licz pierwszych z tablicy wygenerowanych liczb --> trzecia funkcja

//1
const generateRandomNumbers = (amount: number): number[] => {
    const numbers: number[] = [];
    for (let i = 0; i < amount; i++) {
        numbers.push(Math.floor(Math.random() * 100000) + 1);
    }
    return numbers;
}
const numbers = generateRandomNumbers(100); //wygeneruje sto licb losowych 0-100000
console.log(numbers);
//2
const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(6));
//3
const filterPrimes = (numbers: number[]): number[] => {
    return numbers.filter((num) => isPrime(num));
}
console.log(filterPrimes(numbers));