var orangePrice = 50;
var chocolate = 0.5;

var applePrice = parseInt("50");
var sum = orangePrice + applePrice;

// kono character thakle output NaN dibe
var mangoPrice = parseInt("Fifty");
// output will be NaN

// purno songkhay pete hole  (parseInt)
var mangoPrice = parseInt("22.5");
// output will be 22

// vognangso or dosomik  songkhay pete hole (parseFloat)
var mangoPrice1 = parseFloat("45.5");
// output will be 45.58

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total);
// output will be 0.30000000000000004

console.log(total.toFixed(4));
// output will be 0.3000

console.log(total.toFixed(2));
// output will be 0.30
console.log(total.toFixed(1));
// output will be 0.3

// console.log(orangePrice);
// console.log(sum);
// console.log(mangoPrice1);

const num = 50 / 0;
console.log(num);
// output will be Infinity

const num1 = -50 / 0;
console.log(num1);
// output will be -Infinity
