// import vec from './Z_vec'
// import vec2 from './Z_vec2'
// import vec3 from './Z_vec3'
// import vec4 from './Z_vec4'

import vec from './vector/Z_vec'
import vec2 from './vector/Z_vec2'
import vec3 from './vector/Z_vec3'
import vec4 from './vector/Z_vec4'



var sketch = (p: p5) => {
  p.preload = () => {

  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    // p.colorMode(p.HSB,360,100,100,100);
    w = p.windowWidth;
    h = p.windowHeight;
  }

  p.windowResized = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    w = p.windowWidth;
    h = p.windowHeight;
  }
  
  p.draw = () => {
    p.background(255,0,0);
    let px:number = p.mouseX -(w/2);
    let py:number = p.mouseY -(h/2);
    let pz:number = p.random(h);
    pos.set(px,py,pz);
    p.fill(0,0,0);
    p.ellipse(pos.x(),pos.y(),50,50);
  }
}

// var sketchP = new p5(sketch);

var sketch_truc = new p5(sketch);

let w : number = 0;
let h : number = 0;

let pos = new vec3(0,0,0);








