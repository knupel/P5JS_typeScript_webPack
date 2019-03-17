export default class vec {
	private x_ : number;
	private y_ : number;
	private z_ : number;
	private w_ : number;

	constructor() {}
  
  // set
	set_x(x_: number) {
		this.x_ = x_;
	}

	set_y(y_: number) {
		this.y_ = y_;;
	}

	set_z(z_: number) {
		this.z_= z_;;
	}

	set_w(w_: number) {
		this.w_= w_;;
	}

  // get
	x() {
		return this.x_;
	}

	y() {
		return this.y_;
	}

	z() {
		return this.z_;
	}

	w() {
		return this.w_;
	}
}
