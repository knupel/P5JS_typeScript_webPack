// import vec from './Z_vec'
// import vec2 from './Z_vec2'
// import vec3 from './Z_vec3'
// import vec4 from './Z_vec4'

import vec from './vector/Z_vec'
import vec2 from './vector/Z_vec2'
import vec3 from './vector/Z_vec3'
import vec4 from './vector/Z_vec4'

let pos = new vec2(0,0);
let size = new vec2(0,0);
let coord = new vec2(0,0);

let w : number = 0;
let h : number = 0;

var sketch = (p: p5) => {
	p.preload = () => {

	}

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		// p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); // translate the work to the middle of the window
		p.colorMode(p.HSB,360,100,100,100);
		w = p.windowWidth;
		h = p.windowHeight;
	}

	p.windowResized = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		// p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
		w = p.windowWidth;
		h = p.windowHeight;
	}
	
	p.draw = () => {
		p.background(255,0,0);
		let col = 10;
		let row = 10;
		let sx = w / col;
		let sy = h / row;
		let index : number = 0;
		p.fill(255,0,255);
		p.stroke(0,0,0);
		p.strokeWeight(1);
		for(let x = 0 ; x < col ; x++) {
			for(let y = 0 ; y < row ; y++) {	
				let px = x * sx;
				let py = y * sy;
				pos.set(px,py);
				size.set(sx,sy);
				coord.set(x,y);
				chose(p, index, pos, size, coord);
				index++;
			}
		}
	}
}

function chose(p: p5, index: number, pos: vec2, size: vec2, coord: vec2) {
	aspect(p, index, coord.x());
	p.rect(pos.x(),pos.y(),size.x(),size.y());
}

function aspect(p: p5, index: number, x: number) {
	let hue_1 = p.sin(p.frameCount * 0.01) * 180.0;
	let hue_2 = p.sin(p.frameCount * 0.01) * 180.0;
	let colour_1 = p.color(hue_1,100,100);
	let colour_2 = p.color(hue_2,100,100);
	if (index%2 == 0) {
		if (x%2 == 0) {
      p.fill(colour_1);
    } else {
      p.fill(colour_2);
    }
	} else {
		if (x%2 == 0) {
      p.fill(colour_2);
    } else {
      p.fill(colour_1);
    }
	}
	p.stroke(0,0,0);
	p.strokeWeight(1);
}

var test = new p5(sketch);












