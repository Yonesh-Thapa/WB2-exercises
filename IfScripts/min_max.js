"use strict";

var a = 67;
var b = 79;
var c = 98;

if (a < b && a < c)
{
    console.log(`From the number ${a}, ${b} and ${c}, the smallest number is ${a}.`)
}
else if (b < a && b < c)
{
    console.log(`From the number ${a}, ${b} and ${c}, the smallest number is ${b}.`)
}
else{
    console.log(`From the number ${a}, ${b} and ${c}, the smallest number is ${c}.`)
}