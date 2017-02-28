import { IOffer } from './offer.interface';
import { IReview } from './review.interface';
import { ISpecification } from './specification.interface';
import { IService } from './service.interface';

export interface IProduct{
    Id: number;
    Name: string;
    CategoryId: number;
    Title: string;
    Description: string;
    MarketPrice: number;
    SellingPrice: number;
    ModelNumber: string;
    ImgUrl: string;
    Available: number;
    Quantity: number;
    Features: string[];
    Specifications: ISpecification[];
    Offers: IOffer[];
    Reviews: IReview[];
    Services: IService[];
}