var cat,cat1_0,cat_0,jerry_teasing,cat4_0, garden,garden_0, jerry;

function preload() {
    //load the images here
    garden_0 = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    garden = createSprite(500,400,1,1);
    garden.addImage("garden",garden_0);

    cat = createSprite(800,550,1,1);
    cat.addAnimation("cat",cat1);
    cat.scale = 0.2;

    jerry = createSprite(300,550);
    jerry.addAnimation("jerry",jerry1);
    jerry.scale = 0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x- jerry.x < (cat.width- jerry.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat3",cat3);
        cat.x = 400;
        cat.changeAnimation("cat3",cat3);
        jerry.addAnimation("jerry3",jerry3);
        jerry.changeAnimation("jerry3",jerry3);
    }
    drawSprites();
    keyPressed();
}

function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW && cat.x === 800 ){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning",cat2);
        jerry.addAnimation("jerryteasing",jerry2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryteasing",jerry2);
    }

}
