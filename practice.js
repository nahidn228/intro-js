// Practice Problem - 01

var taka = 1000;
var orangePrice = 700;
var returnTaka = taka - orangePrice;
console.log("Shopkeeper return me= " + returnTaka);

// Practice Problem - 02

var math = parseFloat("75.25");
var biology = 65;
var chemistry = 80;
var physics = parseFloat("35.45");
var bangla = parseFloat("99.50");

//print the result in 2 decimal place

var total = math + biology + chemistry + physics + bangla;
var avg = total / 5;
console.log("The Avarage marks of this student is = " + avg.toFixed(2) );


// Practice Problem - 03

var num1 = 119;
var num2 = 5;
var result = num1 % num2;
console.log("The Reminder= " + result);