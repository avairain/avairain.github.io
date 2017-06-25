/**
 * Created by гъ on 2017/6/14.
 */
function Pipe(option){
    this.ctx=option.ctx;
    this.x=option.x;
    this.imgT=option.imgT;
    this.imgB=option.imgB;
    this.w=option.imgT.width;
    this.h=option.imgT.height;
    this.space=option.space||150;
    this.step=option.step||2;
    this.Top=0;
    this.Bottom=0;
    this.Top = -(Math.random() * 200 + 150);
    this.initPath();
}
Pipe.prototype={
    constructor:Pipe,
    draw:function(){
        this.x-=this.step;
        if(this.x<-this.w*3){
            this.x+=this.w*3*6;
            this.Top = -(Math.random() * 200 + 150);
        }
        this.ctx.drawImage(this.imgT,this.x,this.Top);
        this.ctx.drawImage(this.imgB,this.x,this.Top+this.h+this.space);
        this.initPath();
    },
    initPath:function(){
        this.ctx.rect(this.x,this.Top,this.w,this.h);
        this.ctx.rect(this.x,this.Top+this.h+this.space,this.w,this.h);
    }
};