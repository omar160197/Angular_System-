import { Address } from "./address";

export class Customer {
 
    constructor(
        public _id: object,
        public fullName: string,
        public customerPhone:number,
        public customerEmail:string,
        public image:string,
        public customerPassword:string,
        public confirmPassword:string,
        public customerTotalPurchase:number,
        public Orders: Array<number>, 
        public customerAddresses: Array<Address>,
        public role:string,
    ) {}
}
