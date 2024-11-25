//sprawdzenie czy wyraz jest palindromem ---> funkcja isPalindrome
function isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
}
console.log(isPalindrome('kajak'));
console.log(isPalindrome('kajak1'));

//napisz funkcję, która policzy n! (silnia) iteracyjnie ---> funkcja factorialIter
//napisz funkcję, która policzy n! (silnia) rekurencyjnie ---> funkcja factorialRec
function factorialIter(n: number): number {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIter(5));
function factorialRec(n: number): number {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}
console.log(factorialRec(5));