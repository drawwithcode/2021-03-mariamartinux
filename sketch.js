let myFont;

let myImage1;
let myImage2;
let myImage3;
let myImage4;

let mySong1;
let mySong2;
let mySong3;
let mySong4;

function preload() {
  myImage1 = loadImage("./assets/dontworry.png");
  mySong1 = loadSound("./assets/dontworry.mp3");
  myImage2 = loadImage("./assets/clairedelune.png");
  mySong2 = loadSound("./assets/clairedelune.mp3");
  myImage3 = loadImage("./assets/partyrock.png");
  mySong3 = loadSound("./assets/partyrock.mp3");
  myImage4 = loadImage("./assets/velvet.png");
  mySong4 = loadSound("./assets/velvet.mp3");
  myFont = loadFont("./assets/bluunext-bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background("blue");

  //division of th screen
  push();
  stroke("magenta");
  strokeWeight(2);
  line(0, height / 1.8, width, height / 1.8);
  pop();

  push();
  stroke("magenta");
  strokeWeight(2);
  line(width / 2, height / 6.5, width / 2, height);
  pop();

  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(48);
  noStroke();
  fill("magenta");
  text("hey, how are u feeling today?", width / 2, height / 10);
  pop();

  push();
  textFont(myFont);
  textAlign(CENTER);
  textSize(24);
  noStroke();
  fill("magenta");
  text("click on your mood to listen", width / 2, height / 7);
  pop();

  //create buttons to start the music tracks
  push();
  var buttonText1 = "in need of optimism";
  button1 = createButton(buttonText1);
  button1.style("background-color", "blue");
  button1.style("color", "white");
  button1.style("cursor", "pointer");
  button1.style("font-size", "32px");
  button1.style("width", "300px");
  button1.style("font-family", "bluunext-bold");
  button1.style("padding", "8px 20px 8px 20px");
  button1.style("border-radius", "15px");
  button1.style("border-style", "none");
  button1.style("border-color", "blue");
  button1.style("border-width", "0px");
  button1.position(windowWidth / 4.4, windowHeight / 3);
  pop();

  push();
  var buttonText2 = "dreamy / melancholic";
  button2 = createButton(buttonText2);
  button2.style("background-color", "blue");
  button2.style("color", "white");
  button2.style("cursor", "pointer");
  button2.style("font-size", "32px");
  button2.style("width", "300px");
  button2.style("font-family", "bluunext-bold");
  button2.style("padding", "8px 20px 8px 20px");
  button2.style("border-radius", "15px");
  button2.style("border-style", "none");
  button2.style("border-color", "blue");
  button2.style("border-width", "0px");
  button2.position(windowWidth / 1.7, windowHeight / 3);
  pop();

  push();
  var buttonText3 = "nostalgic - happy";
  button3 = createButton(buttonText3);
  button3.style("background-color", "blue");
  button3.style("color", "white");
  button3.style("cursor", "pointer");
  button3.style("font-size", "32px");
  button3.style("width", "250px");
  button3.style("font-family", "bluunext-bold");
  button3.style("padding", "8px 20px 8px 20px");
  button3.style("border-radius", "15px");
  button3.style("border-style", "none");
  button3.style("border-color", "blue");
  button3.style("border-width", "0px");
  button3.position(windowWidth / 4.2, windowHeight / 1.4);
  pop();

  push();
  var buttonText4 = "very chill";
  button4 = createButton(buttonText4);
  button4.style("background-color", "blue");
  button4.style("color", "white");
  button4.style("cursor", "pointer");
  button4.style("font-size", "32px");
  button4.style("width", "250px");
  button4.style("font-family", "bluunext-bold");
  button4.style("padding", "8px 20px 8px 20px");
  button4.style("border-radius", "15px");
  button4.style("border-style", "none");
  button4.style("border-color", "blue");
  button4.style("border-width", "0px");
  button4.position(windowWidth / 1.65, windowHeight / 1.4);
  pop();

  //images of the vinyls
  push();
  image(
    myImage1,
    windowWidth / 8,
    250,
    myImage1.width / 1.5,
    myImage1.height / 1.5
  );
  image(
    myImage2,
    windowWidth / 1.15,
    250,
    myImage1.width / 1.5,
    myImage1.height / 1.5
  );
  image(
    myImage3,
    windowWidth / 8,
    windowHeight / 1.3,
    myImage1.width / 1.5,
    myImage1.height / 1.5
  );
  image(
    myImage4,
    windowWidth / 1.15,
    windowHeight / 1.3,
    myImage1.width / 1.5,
    myImage1.height / 1.5
  );
  pop();

  //play the music
  button1.mousePressed(function () {
    if (mySong1.isPlaying()) {
      mySong1.stop();
    } else {
      mySong1.play();
      mySong3.stop();
      mySong2.stop();
      mySong4.stop();
    }
  });

  //make the records rotate when the song plays
  if (mySong1.isPlaying()) {
    push();
    imageMode(CENTER);
    translate(windowWidth / 8, 250);
    rotate(frameCount * 5);
    image(myImage1, 0, 0, myImage1.width / 1.5, myImage1.height / 1.5);
    pop();
  }

  button2.mousePressed(function () {
    if (mySong2.isPlaying()) {
      mySong2.stop();
    } else {
      mySong2.play();
      mySong1.stop();
      mySong3.stop();
      mySong4.stop();
    }
  });

  if (mySong2.isPlaying()) {
    push();
    imageMode(CENTER);
    translate(windowWidth / 1.15, 250);
    rotate(frameCount * 5);
    image(myImage2, 0, 0, myImage1.width / 1.5, myImage1.height / 1.5);
    pop();
  }

  button3.mousePressed(function () {
    if (mySong3.isPlaying()) {
      mySong3.stop();
    } else {
      mySong3.play();
      mySong1.stop();
      mySong2.stop();
      mySong4.stop();
    }
  });

  if (mySong3.isPlaying()) {
    push();
    imageMode(CENTER);
    translate(windowWidth / 8, windowHeight / 1.3);
    rotate(frameCount * 5);
    image(myImage3, 0, 0, myImage1.width / 1.5, myImage1.height / 1.5);
    pop();
  }

  button4.mousePressed(function () {
    if (mySong4.isPlaying()) {
      mySong4.stop();
    } else {
      mySong4.play();
      mySong1.stop();
      mySong3.stop();
      mySong2.stop();
    }
  });

  if (mySong4.isPlaying()) {
    push();
    imageMode(CENTER);
    translate(windowWidth / 1.15, windowHeight / 1.3);
    rotate(frameCount * 5);
    image(myImage4, 0, 0, myImage1.width / 1.5, myImage1.height / 1.5);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
