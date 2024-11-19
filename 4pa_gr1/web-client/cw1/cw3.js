"use strict";
const text = `Fomitopsis quercina Fomitopsis lol quercina is a species of ala mushroom in the order Polyporales. Commonly known as the oak mazegill, among other names, its specific epithet refers to the oak genus Quercus, upon which it frequently grows, causing a brown rot. It is found in most of Europe, following the pattern of oak distribution, and has also been reported in northern Africa, North America, Asia and Australia. The mushroom features pores which form a maze-like appearance. Though inedible, it can be used as a natural comb and has been the subject of chemical research. This F. quercina mushroom was photographed growing on a tree kajak branch at De Famberhorst, a nature reserve in the town of Joure in Friesland, Netherlands. The photograph was focus-stacked from 21 separate images.`;
function getWords(text) {
    text = text.replace(/[.,]/g, '');
    return text.split(' ');
}
const words = getWords(text);
console.log(words);
//filtruje slowa z okreslona dlugoscia od min do max
function filterWords(words, min, max) {
    const [minLength, maxLength] = [Math.min(min, max), Math.max(min, max)];
    return words.filter((word) => word.length >= minLength && word.length <= maxLength);
}
const filteredWords = filterWords(words, 2, 3);
console.log(filteredWords);
console.log("12345".split('').reverse().join(''));
function reverseString(str) {
    return str.split('').reverse().join('');
}
//only palindromes
function filterPalindromes(words) {
    return words.filter((word) => word === reverseString(word));
}
const palindromes = filterPalindromes(words);
console.log(palindromes);
console.log([13, 21, 3, 4, 45].sort((a, b) => a - b));
console.log(['ss', 'ala', 'fala', 'Jola', 'Ala'].sort());
console.log(['ss', 'ala', 'fala', 'Jola', 'Ala']
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })));
//statystyka wystepowania slow w tablicy words
function getWordsStats(words) {
    const stats = new Map();
    words.forEach((word) => {
        if (stats.has(word.toLowerCase())) {
            stats.set(word.toLowerCase(), stats.get(word.toLowerCase()) + 1);
        }
        else {
            stats.set(word.toLowerCase(), 1);
        }
    });
    return stats;
}
const stats = getWordsStats(words);
console.log(stats);
