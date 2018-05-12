function Ship (){
    this.x = width/2;
    this.y = height - 30;
    this.show = function () {
        fill("black")
        rect(this.x, this.y,10,80)
    }

    this.move = function(dir) {
        this.x += dir;
    }
}