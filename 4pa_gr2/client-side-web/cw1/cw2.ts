const words = ['hello', 'world', 'foo', 'bar', 'baz'];
const numbers = [1, 2, 3, 4, 5];
words.push('qux');
const show = (items: Array<string | number>) => {
    items.forEach(item => console.log(item));
};
const result = words.map(word => word.toUpperCase());
const result2 = numbers.map(n => Math.pow(n, 2));
show(result);
show(words);
show(result2);