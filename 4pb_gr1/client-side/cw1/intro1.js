let a = 12;
let b = 13;
console.log(`${a} + ${b} = ${a + b}`);
a = "ala ma kota";
console.log(`${a} + ${b} = ${a + b}`);
const tab = [23, 78, "ala ma kota", true, [1, 2, 3]];
console.log(tab);
for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}
for (let elem of tab) {
  console.log(elem);
}
tab.forEach((elem, index) => {
  console.log(elem);
});
// console.log(tab[4].toUpperCase());
//alert("Hello world");
//document.write("Hello world");
console.log(global);
setInterval(()=>{console.log("Hello world");
}, 2000);