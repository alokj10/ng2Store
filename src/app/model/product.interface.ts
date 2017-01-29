import { IOffer } from './offer.interface';
import { IReview } from './review.interface';
import { ISpecification } from './specification.interface';

export interface IProduct{
    Id: number;
    Name: string;
    CategoryId: number;
    Title: string;
    Description: string;
    MarketPrice: number;
    SellingPrice: number;
    ModelNumber: string;
    Quantity: number;
    Features: string[];
    Specifications: ISpecification[];
    Offers: IOffer[];
    Reviews: IReview[];
}