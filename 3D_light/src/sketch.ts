import vec3 from './Z_vec3'


var sketch = (p: p5) => {
  p.preload = () => {

  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.colorMode(p.HSB,360,100,100,100);
    w = p.windowWidth;
    h = p.windowHeight;
  }

  p.windowResized = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    w = p.windowWidth;
    h = p.windowHeight;
  }
  
  p.draw = () => {
    p.background(hue_bg,100,100);
    if(mouse_pressed) {
      rot_x = p.map(p.mouseX,0,p.width,0,p.TAU);
      rot_y = p.map(p.mouseY,0,p.height,0,p.TAU);
    } else {
      // pffff we need to make this displaement when we're in WEBGL to have something in the center of window :(
      pos_x = p.mouseX -(w/2);
      pos_y = p.mouseY -(h/2);
    }

    let dir_light_x = (pos_x / w - 0.5) * 2;
    let dir_light_y = (pos_x / h - 0.5) * 2;
    hue_light = p.abs(p.sin(p.frameCount *.01))*360.0;
    p.directionalLight(hue_light,saturation_light,brightness_light, -dir_light_x, -dir_light_y, 0.25);
    p.ambientMaterial(hue_ambient,saturation_ambient,brightness_ambient);
    
    p.translate(pos_x,pos_y,0);
    p.rotateX(rot_y);
    p.rotateY(rot_x);
    
    let size : number = w/3;
    let min_size : number = 20;
    let box_size_x : number = p.abs(p.cos(p.frameCount *.01)) *size +min_size;
    let box_size_y : number = p.abs(p.cos(p.frameCount *.02)) *size +min_size;
    let box_size_z : number = p.abs(p.cos(p.frameCount *.001)) *size +min_size;
    p.box(box_size_x,box_size_y,box_size_z);  
    
  }

  p.mousePressed = () => {
    mouse_pressed = true;
    hue_bg = p.random(360);
  }

  p.mouseReleased = () => {
    mouse_pressed = false;
  }
}

let w : number = 0;
let h : number = 0;

let mouse_pressed: boolean = false;
var sketchP = new p5(sketch);

var hue_bg:number =255;

var hue_light:number =0;
var saturation_light:number =100;
var brightness_light:number =100;

var hue_ambient:number =0;
var saturation_ambient:number =0;
var brightness_ambient:number =100;

let pos = new vec3(0,0,0);

let rot_x:number = 0;
let rot_y:number = 0;

let pos_x:number = 0;
let pos_y:number = 0;





