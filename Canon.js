class Canon
{
    constructor(x,y,w,h,angle)
    {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.angle = angle;

      this.canonImg = loadImage("assets/canon.png");
      this.canonBase = loadImage("assets/cannonBase.png");
    }

    display()
    {
        push();

        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canonImg, 0, 0, this.w, this.h);

        pop();

        image(this.canonBase, 60, 20, 200, 200);
    }
}