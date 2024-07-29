n = prompt("What is your name?"); 
alert("Welcome to Magic 8 Ball " + n);
ball.onclick = answer;
function answer() {
    let alist = ["Yes", "No", "Maybe", "Why not?", "Prepare for the worst!",
    "Ask again later", "Hope for best", "Give up!", "I don't know", 
    "Keep Trying"];
    let randomIndex = Math.floor(Math.random() * alist.length);
    box.textContent = alist[randomIndex];
    if (alist[randomIndex] == "Yes")
    {
        box.style.backgroundColor = "green"; //access CSS
    } else {
        box.style.backgroundColor = "red";
    }
}

ball.style.display = "none"; //hide the ball
time = setInterval(updatetime, 1000);
past = Date.now();
function updatetime() {
    let seconds = Math.floor( (Date.now()-past) / 1000);
    timer.textContent = String(seconds);
    if (seconds > 3)
    {
        ball.style.display = "block";
        clearInterval(time);
    }
}
     











