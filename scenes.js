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
      image(img5, 50, 300, 500,150)
      button(380, 500, 200, 75, 200, -1);
      textSize(70);
      fill(60);
      text("Back", 400, 560);

}

    //Options scene

    var Options = function() {

      background(190);
      button(380, 500, 200, 75, 0, -1);
      textSize(70);
      fill(255);
      text("Back", 400, 560);

    }

    //StoryScene1

    var StoryScene1 = function() {

      background(153, 255, 102);
      image(img2, 0, 100, 600, 500);
      textStyle(BOLD);
      textSize(25);
      fill(255, 51, 0);
      text("In the middle of the jungle in South Africa there is a temple that used to have a lot of valuable item. Can you go back and get all the lost treasure?", 10, 12, 610, 100);
      button(380, 500, 200, 65, 255, 1);
      textSize(40);
      fill(0);
      text("LETS GO!", 390, 550);
      
    }
    
    //Question Scene
    
var option = [];
var n1a,n2a,n1s,n2s,n1m,n2m,i,j,z,t;
var que = "";


var Question = function () {
  background(60);

  if(z3 == 1)
    Qbutton(85,300,85,50,30,1);
  else
    Qbutton(85,300,85,50,30);
    
  if (z3 == 2)
    Qbutton(255,300,85,50,30,1);
  else
    Qbutton(255,300,85,50,30);
  
  if(z3 == 3)
    Qbutton(425,300,85,50,30,1);
  else
    Qbutton(425,300,85,50,30);
    
  fill(255);  
  
  
  var l=1;
  for (var k = 0; k < 3; k++)  {
    if(k === z3 - 1){
      option[k] = answer(0);
    } else{
        if ( l == 1) {
          option[k] = answer(z1);
          l++;
        }
        else {
          option[k] = answer(z2);
        }
    }
  
  }
  
  textSize(60);
  text(que, 90, 140)
  textSize(20);
  text(option[0],120,330)
  text(option[1],290,330)  
  text(option[2],460,330)
}
    
    //Win Scene

    var WinScene = function() {
      
      background(200);
      image(img3, 0, 0, 600, 600);
      textSize(60);
      fill(255);
      text("YOU WIN!",175,100);
      button(260, 500, 120, 65, 255, 1);
      textSize(40);
      fill(0);
      text("Next!", 270, 550);
      
    }
    
    //End Menu

    var EndMenu = function() {
      
      background(70);
      fill(255);
      textSize(40)
      textStyle(BOLD);
      text("Thank For Playing",130,100);
      button(130, 400, 330, 65, 255, 1);
      textSize(30);
      fill(0);
      text("Learn More About Us!", 140, 450);
      
    }