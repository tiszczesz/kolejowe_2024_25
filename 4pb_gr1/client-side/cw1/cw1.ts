let a = 12;
console.log(typeof a); // number
//a = 'hello';
const tab = [1, 2, 3,"4"];
tab.forEach((element) => {
    if(typeof element === 'number')
        element.toFixed(2);
});
