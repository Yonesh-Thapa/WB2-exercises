// Description: This script test various numeric 
//              conversion techniques
// Author: Jordan Q. New programmer

"use strict;"

var a ="  101.1  ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5";

console.log(parseInt(a));
console.log(parseInt(b));
console.log(parseInt(c));
console.log(parseInt(d));

console.log(parseFloat(a));
console.log(parseFloat(b));
console.log(parseFloat(c));
console.log(parseFloat(d));

console.log(Number(a));
console.log(Number(b));
console.log(Number(c));
console.log(Number(d));

a =+ a;
b =+ b;
c =+ c;
d =+ d;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

