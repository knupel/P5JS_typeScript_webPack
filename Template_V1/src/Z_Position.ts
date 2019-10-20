export default class Position {
	x : number;
	y : number;
	constructor(public x_ : number, public y_ : number) {
		this.x = x_;
		this.y = y_;
	}

	set(x_ : number, y_ : number) {
		this.x = x_;
		this.y = y_;
	}

	get_x() {
		return this.x;
	}

	get_y() {
		return this.y;
	}
}
