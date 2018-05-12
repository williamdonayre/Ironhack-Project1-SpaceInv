function Monster (x, y) {
    this.x = x;
    this.y = y;
    this.r = 20

    this.show = function (){
        noStroke();
        fill("red")
        rect(this.x,this.y, this.r*2, this.r*2)

    }



}