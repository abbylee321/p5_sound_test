var song;
var amp; //amplitude 
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
    }
  }

function preload() {
  song = loadSound('Coffee_ShotgunPerpendicular_beginning.mp3')
}

function setup() {
  createCanvas(400, 400);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude(); 
}

function draw() {
  background(220);
  var vol = amp.getLevel();
  ellipse(100, 100, 200, vol  * 200)
}