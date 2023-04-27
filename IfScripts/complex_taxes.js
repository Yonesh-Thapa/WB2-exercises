"use strict";

const payRate = 17.3;
var hoursWorked = 45;
var grossPay;
var overtimePay;
var regularHourPay;

if (hoursWorked <= 40) {
    grossPay = hoursWorked * payRate;
}
else {
    regularHourPay = (payRate * 40);
    overtimePay = (payRate * 1.5) * (hoursWorked - 40);
    grossPay = regularHourPay + overtimePay;

}

var filling_status = "Single"
var annualGrossPay = grossPay * 52;
var tax_withhold;

if (filling_status === "Single") {
    if (annualGrossPay < 12000) {
        tax_withhold = grossPay * 0.05; // 5 % tax
    }
    else if (annualGrossPay < 24999.99) {
        tax_withhold = grossPay * 0.10; // 10 % tax
    }
    else if (annualGrossPay < 74999.99) {
        tax_withhold = grossPay * 0.15; // 15 % tax
    }
    else (annualGrossPay >= 75000)
    {
        tax_withhold = grossPay * 0.20; // 20 % tax
    }
}
else {

    if (annualGrossPay < 12000) {
        tax_withold = grossPay * 0.0; // 5 % tax
    }
    else if (annualGrossPay < 24999.99) {
        tax_withhold = grossPay * 0.06; // 10 % tax
    }
    else if (annualGrossPay < 74999.99) {
        tax_withhold = grossPay * 0.11; // 15 % tax
    }
    else (annualGrossPay >= 75000)
    {
        tax_withhold = grossPay * 0.20; // 20 % tax
    }
}

var netPay= grossPay - tax_withhold

console.log(`You worked ${hoursWorked} hours this period.`)
console.log(`Because you earn $${payRate} per hour, you gross pay is$${grossPay}.`);
console.log(`Your filing status is ${filling_status}.`);
console.log(`Your tax withholdings this perios is $${tax_withhold}`)
console.log(`Your net pay is $${netPay}`)


