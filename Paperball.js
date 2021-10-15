class Paperball
{
    constructor(x, y, diameter)
    {
        var option = {'isStatic': false, 'restitution': 0.3, 'density': 1.2, 'friction': 0.5};
        this.bodyX = x;
        this.bodyY = y;
        this.bodyD = diameter;

        this.body = Bodies.circle(this.bodyX, this.bodyY, this.bodyD/2, option);
        World.add(myWorld, this.body);
    }

    display()
    {
        push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            fill("yellow");
            ellipse(0, 0, this.bodyD, this.bodyD);
        pop();
    }

};