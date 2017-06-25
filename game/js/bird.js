/**
 * Created by гъ on 2017/6/14.
 */
function Bird(option) {
    this.ctx = option.ctx;
    this.birdImg = option.img;
    this.x = option.x;
    this.y = option.y;
    this.w = option.img.width / 3;
    this.h = option.img.height;
    this.birdIndex = option.birdIndex;
    this.speed = option.speed ||0;
    this.acc = option.acc || 0.0005;
    this.maxAngle=option.maxAngle||45;
    this.maxSpeed=option.maxSpeed||0.3;
}
Bird.prototype = {
    constructor: Bird,
    draw: function (time) {
        this.speed = this.speed + this.acc * time;
        var deltaY = this.speed * time + this.acc * time * time / 2;
        this.y += deltaY;
        this.ctx.save();
        this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        var currentAngle = this.speed * this.maxAngle / this.maxSpeed;
        if (currentAngle > this.maxAngle) {
            currentAngle = this.maxAngle;
        }
        this.ctx.rotate(this.angleToRadian(currentAngle));
        this.ctx.drawImage(this.birdImg,this.birdIndex*this.w,0,this.w,this.h,-this.w/2, -this.h/2,this.w,this.h);
        this.ctx.restore();
        this.birdIndex++;
        this.birdIndex%=3;
    },
    angleToRadian: function (angle) {
        return angle * Math.PI / 180;
    }
};
