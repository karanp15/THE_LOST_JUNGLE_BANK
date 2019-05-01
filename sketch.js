function setup() {
  createCanvas(600, 600);
  //randomNumbers();
}



var i = 0;
var scene = 1;
var buttonX;
var buttonY;
var buttonW;
var buttonH;
let img;
var firstTimeScene6 = 0;



draw = function() {

  //Logo
  if (scene === 1) {

    logo();

  } else if (scene === 2) {

    MainMenu();

  } else if (scene === 3) {

    Instruction();
    
  } else if (scene === 4) {

    Options();

  } else if (scene === 5) {

    StoryScene1();

  } else if (scene === 6) {
    
    if( firstTimeScene6 === 0 ) {
        randomNumbers();
        firstTimeScene6++;
    }
    
    Question();

  } else if (scene === 7) {
    
    wrongScene();

  } else if (scene === 8) {

    firstTimeScene6 = 0;
    rightScene(); 

  } else if (scene === 9) {

    WinScene();

  } else if (scene === 10) {

    EndMenu();

  } else if (scene === 11) {
   
    aboutUs();
    
  }
};