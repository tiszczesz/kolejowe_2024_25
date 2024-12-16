"use strict";
const generRange = (input) => {
    const range = document.createElement('input');
    range.style.width = '60%';
    range.addEventListener('input', () => {
        if (input) {
            input.style.opacity = range.value;
        }
    });
    range.type = 'range';
    range.min = '0';
    range.max = '1';
    range.step = '0.01';
    return range;
};
const text = document.querySelector('#text');
const text2 = document.querySelector('#text2');
const root = document.querySelector('#root');
if (root && text) {
    root.appendChild(generRange(text));
}
if (root && text2) {
    root.appendChild(generRange(text2));
}
