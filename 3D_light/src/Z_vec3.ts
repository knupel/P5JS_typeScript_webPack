export default class vec3 {
	x : number;
	y : number;
	z : number;
 

	constructor(public x_ : number, public y_ : number, public z_ : number) {
		this.x = x_;
		this.y = y_;
		this.z = z_;
	}

	set(x_ : number, y_ : number, z_ : number) {
		this.x = x_;
		this.y = y_;
		this.z = z_;
	}

	get_x() {
		return this.x;
	}

	get_y() {
		return this.y;
	}

	get_z() {
		return this.z;
	}
}
