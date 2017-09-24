var PhaserObject = function() {
  this.app;

};
PhaserObject.prototype.setApp= function(app) {
	this.app = app;
	console.log("coucou");
};
PhaserObject.prototype.getApp= function() {
	return this.app;
};

