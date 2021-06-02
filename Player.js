class Player
{
    constructor()
    {
        this.spt = createSprite(400, 200, 100, 100);
        this.spt.shapeColor = "blue";
    }
    applyGravity()
    {
        this.spt.velocityY = this.spt.velocityY + 2;
    }
    moveLeft()
    {
        this.spt.x= this.spt.x - 10;
    }
    moveRight()
    {
        this.spt.x = this.spt.x + 10;
    }
    jump()
    {
        this.spt.velocityY = -20;
    }
};