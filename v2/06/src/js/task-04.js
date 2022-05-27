
let ounterValue = 0;
let counterValue = document.querySelector("#value").textContent;
counterValue = Number(counterValue);
console.log('counterValue',counterValue);

const btnPlus = document.querySelector('button[data-action="increment"]');
console.log("btnPlus",btnPlus.textContent);
// console.log(btnPlus.textContent++);
const btnMinus = document.querySelector('button[data-action="decrement"]');
// let inc = ()=> counterValue++;
let inc = ()=> console.log(counterValue++);
// console.log(inc);
let dec = () => console.log(counterValue--);

console.log('counterValue',counterValue);
btnPlus.addEventListener("click", inc);
btnMinus.addEventListener("click", dec);
// counterValue = ounterValue
console.log("btnPlus",btnPlus.textContent);
console.log("btnMinus",btnMinus.textContent);
console.log('counterValue',counterValue);

// const singleBtn = document.querySelector("#single");
// console.log(singleBtn);
// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);