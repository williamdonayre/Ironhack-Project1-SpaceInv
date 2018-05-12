function Drop (x, y) {
    this.x = x;
    this.y = y;

    this.show = function (){
        noStroke();
        fill("#00FFFF");
        rect(this.x,this.y,10,10);
    };

    this.move = function() {
        this.y = this.y - 5;
    };

    this.hits = function (monsters) {
        var h = dist(this.x,this.y, monsters.x,monsters.y);

    if (h < this.r + monsters.r) {
        return true;
    } else {
        return false;
    }
    console.log(h)
    }


}