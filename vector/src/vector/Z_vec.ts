import vec2 from './Z_vec2'
import vec3 from './Z_vec3'
import vec4 from './Z_vec4'
/**
* vec class
* v 0.0.2
* 2019-2019
* Vector class with a number precision
* @author @stanlepunk
* refactoring from Rope Processing-Java library
* @see https://github.com/StanLepunK/Rope 
*/
export default class vec {
	protected x_:number;
	protected y_:number;
	protected z_:number;
	protected w_:number;

	constructor() {}
  
  // set
	set_x(x_: number):void {
		this.x_ = x_;
	}

	set_y(y_: number):void {
		this.y_ = y_;;
	}

	set_z(z_: number):void {
		this.z_= z_;;
	}

	set_w(w_: number):void {
		this.w_= w_;;
	}

  // get
	x():number {
		return this.x_;
	}

	y():number {
		return this.y_;
	}

	z():number {
		return this.z_;
	}

	w():number {
		return this.w_;
	}

	// rgb
  red():number {
    return this.x_;
  }

  gre():number {
    return this.y_;
  }

  blu():number {
    return this.z_;
  }

  // hsb
  hue():number {
    return this.x_;
  }

  sat():number {
    return this.y_;
  }

  bri():number {
    return this.z_;
  }
  
  // alpha
  alp():number {
    return this.w_;
  }

  // BASIC VECTOR OPERATION
  /**
   * multiplication
   * @param m
   * @return
   */
  mult(...m: Array<number>):void {
   	if(m.length == 1) {
   		this.x_ *= m[0]; 
			this.y_ *= m[0]; 
    	this.z_ *= m[0];
    	this.w_ *= m[0];  
   	} else if(m.length == 2) {
   		this.x_ *= m[0]; 
			this.y_ *= m[1];  
   	} else if(m.length == 3) {
   		this.x_ *= m[0]; 
			this.y_ *= m[1]; 
    	this.z_ *= m[2]; 
   	} else if(m.length == 4) {
   		this.x_ *= m[0]; 
			this.y_ *= m[1]; 
    	this.z_ *= m[2];
    	this.w_ *= m[3]; 
   	}
   	this.set_x(this.x_);
		this.set_y(this.y_);
		this.set_z(this.z_);
		this.set_w(this.w_);
  }


  /**
   * division
   * @param d
   * @return
   */
  div(...d: Array<number>):void {
   	if(d.length == 1) {
   		this.x_ /= d[0]; 
			this.y_ /= d[0]; 
    	this.z_ /= d[0];
    	this.w_ /= d[0];  
   	} else if(d.length == 2) {
   		this.x_ /= d[0]; 
			this.y_ /= d[1];  
   	} else if(d.length == 3) {
   		this.x_ /= d[0]; 
			this.y_ /= d[1]; 
    	this.z_ /= d[2]; 
   	} else if(d.length == 4) {
   		this.x_ /= d[0]; 
			this.y_ /= d[1]; 
    	this.z_ /= d[2];
    	this.w_ /= d[3]; 
   	}
   	this.set_x(this.x_);
		this.set_y(this.y_);
		this.set_z(this.z_);
		this.set_w(this.w_);
  }


  /**
   * addition
   * @param a
   * @return
   */
  add(...a: Array<number>):void {
   	if(a.length == 1) {
   		this.x_ += a[0]; 
			this.y_ += a[0]; 
    	this.z_ += a[0];
    	this.w_ += a[0];  
   	} else if(a.length == 2) {
   		this.x_ += a[0]; 
			this.y_ += a[1];  
   	} else if(a.length == 3) {
   		this.x_ += a[0]; 
			this.y_ += a[1]; 
    	this.z_ += a[2]; 
   	} else if(a.length == 4) {
   		this.x_ += a[0]; 
			this.y_ += a[1]; 
    	this.z_ += a[2];
    	this.w_ += a[3]; 
   	}
   	this.set_x(this.x_);
		this.set_y(this.y_);
		this.set_z(this.z_);
		this.set_w(this.w_);
  }


  /**
   * subtraction
   * @param s
   * @return
   */
  sub(...s: Array<number>):void {
   	if(s.length == 1) {
   		this.x_ -= s[0]; 
			this.y_ -= s[0]; 
    	this.z_ -= s[0];
    	this.w_ -= s[0];  
   	} else if(s.length == 2) {
   		this.x_ -= s[0]; 
			this.y_ -= s[1];  
   	} else if(s.length == 3) {
   		this.x_ -= s[0]; 
			this.y_ -= s[1]; 
    	this.z_ -= s[2]; 
   	} else if(s.length == 4) {
   		this.x_ -= s[0]; 
			this.y_ -= s[1]; 
    	this.z_ -= s[2];
    	this.w_ -= s[3]; 
   	}
   	this.set_x(this.x_);
		this.set_y(this.y_);
		this.set_z(this.z_);
		this.set_w(this.w_);
  }
  
  




  /**
  * MULTI COMPONENT
  * need find a solution to return a vec2, vec3 or vec4 before go far in this way
  * understand write a method like yx(), xx(), xyzw() etc...
  */
  
  xy():Object {
  	let output = new vec();
  	output.set_x(this.x_);
  	output.set_y(this.y_);

  	// let output = null;
  	// let output = new vec2(null,null);
  	//let output = new vec2(this.x_,this.y_);
  	return output;
  }

  xyz() {
  	let output = new vec();
  	output.set_x(this.x_);
  	output.set_y(this.y_);
  	output.set_z(this.z_);
  	//let output = new vec3(this.x_,this.y_,this.z_);
  	return output;
  }

  xyzw() {
  	let output = new vec();
  	output.set_x(this.x_);
  	output.set_y(this.y_);
  	output.set_z(this.z_);
  	output.set_w(this.w_);
  	//let output = new vec4(this.x_,this.y_,this.z_,this.w_);
  	return output;
  }
}
