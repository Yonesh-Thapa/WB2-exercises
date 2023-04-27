"use strict";

const payRate = 17.3;
var hoursWorked = 45;
var grossPay;
var overtimePay;
var regularHourPay;

if (hoursWorked <= 40){
    grossPay = hoursWorked * payRate;
}
else{
    regularHourPay = (payRate * 40);
    overtimePay = (payRate * 1.5) * (hoursWorked - 40);
    grossPay = regularHourPay + overtimePay;
    
}

console.log(`The gross pay for ${hoursWorked} hrs worked is ${grossPay}`);
