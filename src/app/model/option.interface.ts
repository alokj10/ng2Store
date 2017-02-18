import { IOptionValue } from './optionValue.interface';

export interface IOption{
    Id: number;
    OptionName: string;
    OptionTitle: string;
    OptionStyle: string;
    OptionValues: IOptionValue[]; 
}