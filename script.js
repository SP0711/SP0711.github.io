function sayHello() {
    const name = prompt("what is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}

sayHello(); 

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You have rolled a " + dice + "!");
}

rollDice();

function jobsearch() {
    let months = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    months += dice;
    alert("It will take you " + months + " months to get your first job as a developer!");
}

jobsearch();

 // this function takes in your levels of comfort with HTML, CSS and JavaScript on a scale of 1-10 and returns
    // a motivational string depdending on your average of the three numbers
function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You're already on your way to being a pro!");
        alert("You're already on your way to being a pro!");
    } else if (average >= 4) {
        console.log("Don't worry, you'll get there! It just takes time and practice.");
        alert("Don't worry, you'll get there! It just takes time and practice.");
    } else {
        console.log("The only way to get better is to keep trying! You can do this!");
        alert("The only way to get better is to keep trying! You can do this!");
    }
}

comfortLevel(8, 9, 10);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.Color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}