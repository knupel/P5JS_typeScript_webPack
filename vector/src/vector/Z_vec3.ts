import vec from './Z_vec'
export default class vec3 extends vec {
	constructor(x_ : number, y_ : number, z_ : number) {
		super();
	}

	set(x_ : number, y_ : number, z_ : number) {
		super.set_x(x_);
		super.set_y(y_);
		super.set_z(z_);
	}

	x() {
		return super.x();
	}

	y() {
		return super.y();
	}

	z() {
		return super.z();
	}
}