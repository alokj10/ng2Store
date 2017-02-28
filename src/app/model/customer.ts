import { IAddress } from './address.interface';
import { User } from './user';

export class Customer extends User {
    
    constructor(){
        super();
    }

    Addresses: IAddress[];
}