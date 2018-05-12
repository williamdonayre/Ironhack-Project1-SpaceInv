var ship;
var monsters = [];
var drops = [];


function setup (){
    createCanvas(500,500)
    ship = new Ship();
    for(var i=0; i < 7; i++) {
        monsters[i] = new Monster(20+i*70,40)
    }
}

function draw (){
    background("grey");
    ship.show();


    for (var i=0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (var j=0; j < monsters.length; j++) {
            if (drops[i].hits(monsters[j])) {
                console.log("hit")
            }
        }    
    }



    for (var i=0; i < monsters.length; i++) {
        monsters[i].show();
    }

}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop (ship.x,ship.y);
        drops.push(drop);
    }

    
    if (keyCode === RIGHT_ARROW) {
        ship.move(10);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-10);
    }
}


// var imageRep = new function() {
//     this.defaultCanvas0 = new Image();
//     this.defaultCanvas0.src = "./images/bg.png"
// }