function setup() {
  createCanvas(600, 600);
  randomNumbers();
}
var i = 0;
var scene = 1;
var buttonX;
var buttonY;
var buttonW;
var buttonH;
let img;

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

    Question();

  } else if (scene === 7) {

    background(255, 0, 0);
    button(380, 500, 200, 75, 0, -1);
    textSize(70);
    fill(255);
    text("Back", 400, 560);


  } else if (scene === 8) {

    background(255, 215, 0);
    button(380, 500, 200, 75, 0, 1);
    textSize(70);
    fill(255);
    text("Next", 400, 560);


  } else if (scene === 9) {

    WinScene();

  } else if (scene === 10) {


    EndMenu();

  }
};
