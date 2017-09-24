
window.onload =init()

function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var app = new Phaser.Game(width, height, Phaser.AUTO, "canvas", {preload: preload, create: create, update: update});
	function preload()
	{ 
		app.load.image("adneomLogoUp","assets/adneomLogoUp.png");//creation de l'image avec l'id "gearIcon" et son url.
		app.load.image("adneomLogoDown","assets/adneomLogoDown.png");
		console.log("preload DONE");
	}
	function create()
	{	
		PhaserObject.app = app;
		displayLogo();
	}
	function update()
	{
		
	}


    function displayLogo(){
		app.adneomLogoUp = new PhaserImage(width/2,height/2,"adneomLogoUp");
		app.adneomLogoUp.setScale(0.45,0.45);
		app.adneomLogoUp.setAnchor(0.5,1);
		app.adneomLogoDown = new PhaserImage(width/2,height/2,"adneomLogoDown");
		app.adneomLogoDown.setScale(0.45,0.45);
		app.adneomLogoDown.setAnchor(0.5,0);
		app.adneomLogoDown.setPosition(app.adneomLogoUp.sprite.position.x - 13, app.adneomLogoDown.sprite.position.y );
    }
}

