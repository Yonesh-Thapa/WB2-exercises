let year = 1900;

if (year % 4 == 0)
 {
    if (year % 100 == 0) 
    {
        if (year % 400 == 0) 
        {
            console.log(year + " is a leap year.");
        } 
        else 
        {
            console.log(year + " is not a leap year.");
        }
    } 
    else 
    {
        console.log(year + " is a leap year.");
    }
} 
else 
{
    console.log(year + " is not a leap year.");
}





// "use strict";

// let year = 1900;

// if (year % 4 == 0 && (year % 100 ==!0 || year % 400 ==0))
// {
//     console.log(`It is a leap year`)

// }
// else 
// {
//     console.log(`It is not a leap year`)
// }

// // if (year % 4 == 0 && year % 100 == 0 && year % 400 ==0)
// // {
// //     console.log(`it is a leap year`);
// // }
// // else 
// // {
// //     console.log(`it is not a leap year`);
// // }










// // } &&  (year % 100 == 0 && year % 400 == 0))
// // {
// //     console.log(`The year ${year} is a leap year`);

// // }

// // else 
// // {
// //     console.log(`The year ${year} is not a leap year`);
// // }