/*
//this is easier only using JS

let username = window.prompt("What is your name?");
console.log(username);
*/

//this is using HTML, harder but more practical
let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;


}