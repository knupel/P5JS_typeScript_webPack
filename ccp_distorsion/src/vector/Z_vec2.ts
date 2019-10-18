/**
* vec2 class
* v 0.0.1
* 2019-2019
* Vector class with a number precision
* @author @stanlepunk
* refactoring from Rope Processing-Java library
* @see https://github.com/StanLepunK/Rope 
*/
import vec from './Z_vec'
import Error_input_num_max from '../Error/Error_input_num_max'

export default class vec2 extends vec {
	constructor(...arg: Array<number>) {
		super();
		if(arg.length == 1) {
   		this.x_ = arg[0]; 
			this.y_ = arg[0];
		} if(arg.length == 2) {
   		this.x_ = arg[0]; 
			this.y_ = arg[1];  
   	} else {
   		new Error_input_num_max("class vec2 constructor() need 1 or 2 arguments",arg.length,2);
   	}
	}

	set(...arg: Array<number>):void {
		if(arg.length == 1) {
   		this.x_ = arg[0]; 
			this.y_ = arg[0];
		} if(arg.length == 2) {
   		this.x_ = arg[0]; 
			this.y_ = arg[1];  
   	} else {
   		new Error_input_num_max("class vec2 method set() need 1 or 2 arguments",arg.length,2);
   	}
   	super.set_x(this.x_);
		super.set_y(this.y_);
	}
}