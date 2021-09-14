export class User{
	constructor(public email:string,
	            public localId:string,
	            private _token:string,
	            private expirationDate:Date
	            ){}

get token(){
	if (new Date() > this.expirationDate){
		return 0;
	}
	return this._token;
}
}
