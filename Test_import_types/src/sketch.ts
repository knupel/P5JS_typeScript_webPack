import Position from './Z_Position'
//import * as _ from "p5";
////<reference path="./node_modules/@types/p5/index.d.ts"/>
////<reference path="./types/p5/index.d.ts"/>
///<reference path="types/p5/index.d.ts"/>

var sketch = (p: p5) => {
  p.preload = () => {

  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    if(p.mousePressed) {
      red = p.random(255);
      green = p.random(255);
      blue = p.random(255);
    }

    p.background(red,green,blue);
    p.square(p.mouseX,p.mouseY,50);
    
    pos.set(p.mouseX,p.mouseY);
    p.ellipse(pos.get_x(),pos.get_y(),50,50);  
       
  }
}

var sketchP = new p5(sketch);
var red =255;
var green =0;
var blue =0;


let pos = new Position(0,0);



