export class Speaker {
 
    constructor(
        public _id: string,
        public email:string,
        public password:number,
        public fullName: string,
        public address:string,
        public role: String,
        public check:boolean=false
    ) {}
}
