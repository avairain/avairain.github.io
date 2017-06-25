/**
 * Created by �� on 2017/6/14.
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
        //���ڶ���ͼƬ��ȫ���˻��������ʱ�򣬽���Żغ���
        if ( this.skyX <= -this.w) {
            this.skyX += 2 * this.w;
        }
        this.ctx.drawImage(this.img, this.skyX, this.skyY);
    }
};
