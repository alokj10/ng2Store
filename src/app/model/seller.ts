import { IAddress } from './address.interface';
import { User } from './user';

export class Seller extends User {
    
    constructor(){
        super();
    }

    DisplayName: string;
    Tagline: string;
}