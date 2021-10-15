class Bob {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

        var options = {
            isStatic: false,
            restitution: 1,
            density: 0.8,
            friction: 0
        };
        this.body = Matter.Bodies.circle(this.x, this.y, this.r / 2, options);
        Matter.World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}