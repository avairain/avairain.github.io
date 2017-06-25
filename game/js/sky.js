/**
 * Created by 雨 on 2017/6/14.
 */
function Sky(option){
    this.img=option.img;
    this.w=this.img.width;
    this.h=this.img.height;
    this.skyX=this.w*option.index;
     this.skyY=0;
    this.speed=2;
    this.ctx=option.ctx;
}
Sky.prototype={
    constructor:Sky,
    draw:function(deltaTime){
        this.skyX -= this.speed;
        //当第二张图片完全到了画布外面的时候，将其放回后面
        if ( this.skyX <= -this.w) {
            this.skyX += 2 * this.w;
        }
        this.ctx.drawImage(this.img, this.skyX, this.skyY);
    }
};
