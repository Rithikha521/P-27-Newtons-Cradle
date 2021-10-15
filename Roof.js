class Roof {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true,

        };
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        Matter.World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255, 0, 255);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}