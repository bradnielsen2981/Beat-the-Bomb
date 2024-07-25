n = prompt("What is your name?");
alert("Welcome to Magic 8 Ball " + n);

ball.onclick = answer;
function answer() {
    alert("You clicked me!");
}























ball = document.getElementById("ball");
ball.addEventListener("click", shout);

function shout() {
    box = document.getElementById("box");
    box.innerHTML = "Yahoo!";
}
