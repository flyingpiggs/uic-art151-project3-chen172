let intro;
let drink;
let large;
let swimming;

/*
  State definitions:
    0 = intro
    1 = drink
    2 = large
    3 = swimming
*/
const cwd = 'C:\\Users\\peter\\Documents\\ART151\\Project3\\Alice-in-Wonderland-Example\\';

console.log( cwd );

let state  = 0;

function preload() {
  intro = loadImage( cwd + '0-intro.jpg');
  drink = loadImage( cwd + '1-drink.jpg');
  large = loadImage( cwd + '2-large.jpg');
  swimming = loadImage( cwd + '3-swimming.jpg');
}

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(255);
  image(intro, 200, 0);
}
