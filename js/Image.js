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
   
};
PhaserImage.prototype.setScale= function(x,y) {
    this.sprite.scale.y= y;
    this.sprite.scale.x= x;   
};
PhaserImage.prototype.setAnchor= function(x,y) {
    this.sprite.anchor.y= y;
    this.sprite.anchor.x= x;   
};
PhaserImage.prototype.setPosition= function(x,y) {
    this.sprite.position.x= x;
    this.sprite.position.y= y;   
};
PhaserImage.prototype.getPosition= function() {
    return this.sprite.position;   
};
PhaserImage.prototype.setAlpha= function(value) {
    this.sprite.alpha= value;
};


