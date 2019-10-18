export default class Error_input_num_max extends Error {
	constructor(message:string, input:number, max:number) {
		super();
		if(input > max) {
			throw new Error(message+ " input is "+input +" and the max is " + max + " this results in an invalid entry");
		}
	}
}