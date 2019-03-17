import vec from './Z_vec'
export default class vec2 extends vec {
	constructor(x_ : number, y_ : number) {
		super();
	}

	set(x_ : number, y_ : number) {
		super.set_x(x_);
		super.set_y(y_);
	}

	x() {
		return super.x();
	}

	y() {
		return super.y();
	}

}