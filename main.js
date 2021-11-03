// create a shooter and initial its location
var shooter = {
    left: 350,
    top: 500
};
// create a missiles list
var missiles = [];
// create a enemy list and store the location of the enemy
var enemies = [
    { left: 150, top: 25 },
    { left: 300, top: 25 },
    { left: 450, top: 25 },
    { left: 600, top: 25 },
    { left: 150, top: 100 },
    { left: 300, top: 100 },
    { left: 450, top: 100 },
    { left: 600, top: 100 },
    { left: 150, top: 175 },
    { left: 300, top: 175 },
    { left: 450, top: 175 },
    { left: 600, top: 175 },   
    { left: 150, top: 250 },
    { left: 300, top: 250 },
    { left: 450, top: 250 },
    { left: 600, top: 250 },
];
// keyboard control  
document.onkeyup = function (e) {
    // use if statement to check if the ketboard input is left arrow
    if (e.keyCode === 37) {
        shooter.left = shooter.left - 10;
    }
    // check if the keyboard input is right arrow
    if (e.keyCode === 39) {
        shooter.left = shooter.left + 10;
    }
    // check if the keyboard input is up arrow
    if (e.keyCode === 38) {
        // add a missle element into missles list use push 
        missiles.push({
            left: shooter.left + 20,
            top: shooter.top - 20
        });
        // call the functions to draw a missle
        drawMissiles()
    }
    // call the drawShooter to draw the shooter after changing its location
    drawShooter();
}


function drawShooter() {
    document.getElementById('shooter').style.left = shooter.left + 'px';
    document.getElementById('shooter').style.top = shooter.top + 'px';
}

function drawMissiles() {
    document.getElementById('missiles').innerHTML = ""
    // use for loop to draw the missles

    for (var i = 0; i < missiles.length; i++) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
}

function moveMissiles() {
    for (var i = 0; i < missiles.length; i++) {
        missiles[i].top = missiles[i].top - 20
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = ""
    for (var i = 0; i < enemies.length; i++) {
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
    }
}
/*
function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].top = enemies[i].top + 0;
    }
}*/



function gameLoop() {
    setTimeout(gameLoop, 100)
    moveMissiles();
    drawMissiles();
    //moveEnemies();
    drawEnemies();
    collisionDetection();
}

gameLoop()