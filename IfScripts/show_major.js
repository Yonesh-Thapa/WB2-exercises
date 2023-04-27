"use strict";

let studentName = "Yonesh Thapa";
let show_major = "Computer Science";

if (show_major === "Biology")
{
    console.log(`Student: ${studentName} `);
    console.log(`Major: ${show_major}`);
    console.log(`Advising Location: Science Bldg, Room 310`);
}
else if (show_major === "Computer Science")
{
    console.log(`Student: ${studentName} `);
    console.log(`Major: ${show_major}`);
    console.log(`Advising Location: Sheppard Hall, Room 314`);
}

else if (show_major === "English")
{
    console.log(`Student: ${studentName} `);
    console.log(`Major: ${show_major}`);
    console.log(`Advising Location: Kerr Hall, Room 114`);
}
else if (show_major === "History")
{
    console.log(`Student: ${studentName} `);
    console.log(`Major: ${show_major}`);
    console.log(`Advising Location: Kerr Hall, Room 114`);
}
else 
{
    show_major = "Marketing";
    console.log(`Student: ${studentName} `);
    console.log(`Major: ${show_major}`);
    console.log(`Advising Location: Westly Hall, Room 310`);
}



