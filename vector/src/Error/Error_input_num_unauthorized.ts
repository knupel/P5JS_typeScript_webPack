
export default class Error_input_num_unauthorized extends Error {
	constructor(message:string, input:number, ...arg: Array<number>) {
		super();
		throw new Error(message+ " input is "+input +" is unauthorized, this results in an invalid entry");
	}
}