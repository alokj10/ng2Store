import { IAddress } from './address.interface';

export interface ICustomer{
    Id: number;
    Name: string;
    Email: string;
    MobileNumber: string;
    Addresses: IAddress[];
}