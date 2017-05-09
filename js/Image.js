var PhaserImage = function(x,y,name) {
	PhaserObject.call(this);
	this.app = PhaserObject.app;
	this.name = name;
 	this.x = x;
 	this.y=y;
	this.sprite;
	this.create();
};
PhaserImage.prototype.create= function() {
	this.sprite = this.app.add.sprite(0,0,this.name);
    this.sprite.anchor.x =0.5;
    this.sprite.anchor.y=0.5;
    this.sprite.position.x = this.x;
    this.sprite.position.y=this.y;
    console.log(this.app);
};
