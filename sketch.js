var starImg,bgImg;
var star, starBody;
var fa,fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	ani = loadImage("images/fairy.png")
}

function setup() {
	createCanvas(800, 550);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;

    fairy = createSprite(150,400)
	fairy.addImage(ani)
	fairy.scale = 0.2

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fa = Bodies.rectangle(150,400,800,10,{isStatic:true});
	World.add(world, fa)
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
 
  fairy.x= fa.position.x
  fairy.y= fa.position.y

  fairy.velocityx=0

  
  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyWentDown("space")) {
        fairy.velocityX = 5

	}


	//writw code to move fairy left and right
	
}
