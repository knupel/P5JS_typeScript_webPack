/**
* vec3 class
* v 0.0.1
* 2019-2019
* Vector class with a number precision
* @author @stanlepunk
* refactoring from Rope Processing-Java library
* @see https://github.com/StanLepunK/Rope 
*/
import vec from './Z_vec'
import Error_input_num_max from '../Error/Error_input_num_max'
import Error_input_num_unauthorized from '../Error/Error_input_num_unauthorized'
export default class vec3 extends vec {
	constructor(...arg: Array<number>) {
		super();
		if(arg.length == 1) {
			this.x_ = arg[0]; 
			this.y_ = arg[0];
			this.z_ = arg[0];
		} if(arg.length == 3) {
			this.x_ = arg[0]; 
			this.y_ = arg[1];
			this.z_ = arg[2];
   	} else if(arg.length > 3) {
   		new Error_input_num_max("class vec3 constructor() need 1 or 3 arguments",arg.length,3);
		} else {
			new Error_input_num_unauthorized("class vec3 constructor() need 1 or 3 arguments",arg.length);
		}
	}

	set(...arg: Array<number>):void {
		if(arg.length == 1) {
   		this.x_ = arg[0]; 
			this.y_ = arg[0];
			this.z_ = arg[0];
		} if(arg.length == 3) {
   		this.x_ = arg[0]; 
			this.y_ = arg[1]; 
			this.z_ = arg[2]; 
		} else if(arg.length > 3) {
			new Error_input_num_max("class vec3 method set() need 1 or 3 arguments",arg.length,3);
		} else {
			new Error_input_num_unauthorized("class vec3 constructor() need 1 or 3 arguments",arg.length);
		}
		super.set_x(this.x_);
		super.set_y(this.y_);
		super.set_z(this.z_);
	}
  
}