"use strict";



function init(){
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick= onHelloBtnClicked;

}
function onHelloBtnClicked(){
    alert("HI there!");
}
window.onload = init;