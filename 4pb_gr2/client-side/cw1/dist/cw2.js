"use strict";
const generTab = (count) => {
    console.log(this); //to global object
    const tab = [];
    for (let i = 0; i < count; i++) {
        tab.push(Math.floor(Math.random() * 1000));
    }
    return tab;
};
generTab(10);
isEven(2);
function isEven(num) {
    console.log(this);
    return num % 2 === 0;
}
