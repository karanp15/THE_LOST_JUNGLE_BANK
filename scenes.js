//logo scene

var logo = function() {

  push();
  translate(100, 100);
  if (i < -2.3) {
    translate(400, 440);
    rotate(HALF_PI / 0.5);
    scene++;
  } else {
    i -= 0.03;
  }
  translate((i + 1) - i * 200, (i + 1) - i * 200 + 20);
  scale(i + 1);

  textStyle(BOLD);
  background(i * 70, i * -45, 250);
  textSize(55);
  fill(i * 150, i * -195, 190);
  text("B", 184, 145);
  text("N", 184, 285);
  text("A", 119, 220);
  text("K", 249, 220);
  fill(i * 150, i * -195, 190);
  text("The", 149, 86);
  text("Xplorers", 100, 356);

  //lines
  strokeWeight(10);
  stroke(i * 150, i * -195, 190);
  line(99, 99, 299, 299);
  line(299, 99, 99, 299);
  pop();

  //text
  textSize(60);
  fill(i * 150, i * -195, 190);
  text("Developed by:", 117, 67);

}

//Main Menu

var MainMenu = function() {

  image(img, 0, 0, 600, 600);
  fill(300);
  textSize(45);
  textStyle(BOLD);
  text('THE LOST JUNGLE BANK', 25, 150);
  noStroke();

  //Instruction
  button(80, 250, 200, 75, 255, 1);
  textSize(35);
  fill(79, 193, 34);
  text("Instruction", 90, 300);

  //Options
  button(320, 250, 200, 75, 255, 2);
  textSize(37);
  fill(79, 193, 34);
  text("Options", 350, 300);

  
  
  
  //Play
  button(120, 350, 350, 100, 255, 3);
  textSize(80);
  fill(79, 193, 34);
  text("Play", 220, 430);

}

//Instruction scene

var Instruction = function() {

  background(70);
  fill(100, 309, 178)
  textSize(50)
  text("INSTRUCTIONS", 110, 100);
  fill(100, 309, 178);
  textSize(20);
  text(" - To Play The Lost Jungle Bank You First Need To Pick A Character. After That You Will Start Playing.", 60, 190, 500, 200);
  text(" - To Move You Will Press The Arrow  Keys And Space Bar To Jump", 60, 250, 500, 200);
  text(" - After That You Know The Basics, Just Rember Dont Let Rex Catch You!", 60, 450, 500, 200);
  image(img5, 50, 300, 500, 150)
  button(380, 500, 200, 75, 200, -1);
  textSize(70);
  fill(60);
  text("Back", 400, 560);

}

//Options scene

var Options = function() {
//pictures
  background(0);
  fill(120, 237, 233);
  ellipse(mouseX,mouseY,10,10);
  textSize(100);
  text('OPTIONS',65,100)
  fill(100);
  rect(-100,110,10000,10);
  textSize(30);
  fill(249, 223, 52);
  text('CHOSE YOUR CHARACTER!',80,150)
  fill(120,237,233);
  text('Galaxy Skin!',40,200)
  text('Captain Underpants!',240,200)
  //images
  image(img10,-60,250,330,330);
  image(img11,220,280,280,280);
  //buttons
  button(380, 500, 200, 75, 0, -1);
  textSize(70);
  fill(255);
  text("Back", 400, 560);
}
 
//StoryScene1

var StoryScene1 = function() {

  background(153, 255, 102);
  image(img2, -400, 0,1000,600);
  textStyle(BOLD);
  textSize(35);
  fill(149,54,175);
  text("In the middle of the jungle in South Africa there is a temple that used to have a lot of valuable item. Can you go back and get all the lost treasure?", 50, 100, 500, 300);
  button(380, 500, 200, 65, 255, 1);
  textSize(40);
  fill(0);
  text("LETS GO!", 390, 550);

}

//Question Scene

var option = [];
var n1a, n2a, n1s, n2s, n1m, n2m, i, j, z, t;
var que = "";


var Question = function() {
  
  image(img9, 0, 0,600,600);

  if (z3 == 1)
    Qbutton(85, 240, 85, 50, 30, 1);
  else
    Qbutton(85, 240, 85, 50, 30);

  if (z3 == 2)
    Qbutton(255, 240, 85, 50, 30, 1);
  else
    Qbutton(255, 240, 85, 50, 30);

  if (z3 == 3)
    Qbutton(425, 240, 85, 50, 30, 1);
  else
    Qbutton(425, 240, 85, 50, 30);

  fill(255);


  var l = 1;
  for (var k = 0; k < 3; k++) {
    if (k === z3 - 1) {
      option[k] = answer(0);
    } else {
      if (l == 1) {
        option[k] = answer(z1);
        l++;
      } else {
        option[k] = answer(z2);
      }
    }

  }

  textSize(60);
  fill(255);
  rect(60,85,490,60)
  fill(0);
  text(que, 90, 140)
  textSize(20);
  fill(255);
  text(option[0], 120, 270)
  text(option[1], 290, 270)
  text(option[2], 460, 270)
}

//Right scene

var rightScene = function() {
  
  firstTimeScene6 = 0;
  background(45, 216, 51);
  button(110, 485, 400, 75, 255, 1);
  fill(255,255,255);
  textSize(75);
  text( "Good Job!",120,100)
  image(img7,190, 160);
  fill(45, 216, 51);
  text("CONTINUE",110,550);

  
}

//Wrong scene

var wrongScene = function() {
  
  background(255, 0, 0);
  button(110, 500, 400, 75, 255, -1);
  textSize(70);
  fill(255,0,0);
  text("TRY AGAIN", 110, 560);
  fill(255);
  text("SORRY", 180, 90);
  textSize(450);
  fill(255);
  text("X", 160, 440);
  
}


//Win Scene

var WinScene = function() {

  background(200);
  image(img3, 0, 0, 600, 600);
  textSize(60);
  fill(255);
  text("YOU WIN!", 175, 100);
  button(460, 500, 120, 65, 255, 1);
  textSize(40);
  fill(0);
  text("Next!", 470, 550);

}

//End Menu

var EndMenu = function() {

  background(70);
  image(img8, 0, 0,600,600);
  fill(255);
  textSize(40)
  textStyle(BOLD);
   button(130, 400, 330, 65, 255, 1);
  textSize(30);
  fill(0);
  text("Learn More About Us!", 140, 450);
  
  button(130, 300, 330, 65, 255, -8);
  textSize(40);
  fill(0);
  text("Play Again!", 190, 350);

}

//About us

var aboutUs = function() {
  
  background(51);
  image(img6, 0, 0, 600, 600);
  textSize(50)
  fill(255);
  text("All About Us", 160, 100);
  fill(255);
  textSize(30);
  text(" - Created by the intelligent mind of Karan Patel & Nathan Mask", 60, 150, 500, 200);
  text(" - Thanks to the creative duos Bentley & Alicia", 60, 250, 500, 200);
  text(" - ICS20 Final project Started: April, 10, 2019  Finished: June, 15, 2019", 60, 350, 500, 200);
  button(380, 500, 200, 75, 200, -1);
  textSize(70);
  fill(60);
  text("Back", 400, 560);
  
}
  
  
  
  