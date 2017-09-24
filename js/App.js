
window.onload =init()

function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var app = new Phaser.Game(width, height, Phaser.AUTO, "canvas", {preload: preload, create: create, update: update});
	var manager = null;
	var emitter = null;
	function preload()
	{ 
		app.load.image("adneomLogoUp","assets/adneomLogoUp.png");//creation de l'image avec l'id "gearIcon" et son url.
		app.load.image("adneomLogoDown","assets/adneomLogoDown.png");
		app.load.image("slash","assets/adneomLogoDown.png");
		app.load.atlas('solRunning', 'assets/solRunning.png', 'assets/solBadGuy.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		console.log("preload DONE");
	}
	function create()
	{	
		PhaserObject.app = app;
		solAnimation(displayLogo());
		

	}
	function update()
	{
		
	}


    function displayLogo(){
    	var timeTrigger = 1000;
		app.adneomLogoUp = new PhaserImage(width/2,height/1.6,"adneomLogoUp");
		app.adneomLogoUp.setScale(0.45,0.45);
		app.adneomLogoUp.setAnchor(0.5,1);
		app.adneomLogoDown = new PhaserImage(width/2,height/1.6,"adneomLogoDown");
		app.adneomLogoDown.setScale(0.45,0.45);
		app.adneomLogoDown.setAnchor(0.5,0);
		app.adneomLogoDown.setPosition(app.adneomLogoUp.sprite.position.x - 13, app.adneomLogoDown.sprite.position.y );
    	app.adneomLogoDown.setAlpha(0);
    	app.add.tween(app.adneomLogoDown.sprite).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.In, true, timeTrigger);
    	app.adneomLogoUp.setAlpha(0);
    	app.add.tween(app.adneomLogoUp.sprite).to( { alpha: 1 }, 3000, Phaser.Easing.Cubic.In, true, timeTrigger);
    	app.add.tween(app.adneomLogoUp.sprite).to( { y: (app.adneomLogoUp.getPosition().y - height/6)}, 85, Phaser.Easing.Cubic.Out, true, timeTrigger+=4000);
    	app.add.tween(app.adneomLogoDown.sprite).to( { y: (app.adneomLogoDown.getPosition().y + height/6)}, 90, Phaser.Easing.Cubic.Out, true, timeTrigger);
	    return timeTrigger;
	}

	function solAnimation(timeTrigger){
		app.sol = new PhaserImage(width/2,height/1.6,"solRunning");
		app.sol.setPosition( -app.sol.sprite.width  ,height/1.6);
		app.sol.sprite.animations.add('running', [
        'frame-01',
        'frame-02',
        'frame-03',
        'frame-04',
        'frame-05',
        'frame-06',
        'frame-07',
        'frame-08',
        'frame-09',
        'frame-10'
    	], 8, true, false);

		app.sol.sprite.animations.play('running');
		app.add.tween(app.sol.sprite).to( { x: width/3}, 2000, Phaser.Easing.Linear.Out, true, timeTrigger-=2500);
	    
	}

}