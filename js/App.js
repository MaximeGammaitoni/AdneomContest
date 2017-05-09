
window.onload =init()

function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var app = new Phaser.Game(width, height, Phaser.AUTO, "canvas", {preload: preload, create: create, update: update});
	function preload()
	{ 
		app.load.image("adneomLogo","assets/adneomLogo.png")//creation de l'image avec l'id "gearIcon" et son url.
		console.log("preload DONE");
	}
	function create()
	{
		PhaserObject.app = app;
		app.adneomLogo = new PhaserImage(width/2,height/2,"adneomLogo");
		console.log("CreateDone");
	}
	function update()
	{
		
	}

}

