/**
 * Created by гъ on 2017/6/14.
 */
function Land(option){
    this.img=option.img;
    this.w=this.img.width;
    this.h=this.img.height;
    this.ctx=option.ctx;
    this.i=option.i;
    this.step=option.step||2;
    this.x=this.i*this.w;

}
Land.prototype={
    constructor:Land,
    draw:function(deltaTime){
        this.x-=this.step;
        //this.i++;
        //console.log( this.x);
        //console.log(this.ctx.canvas.width - this.w * 3);
        if(this.x<-this.w){
            this.x+=this.w*4;
        }
        this.ctx.drawImage(this.img,this.x,this.ctx.canvas.height-this.h)
    }
};