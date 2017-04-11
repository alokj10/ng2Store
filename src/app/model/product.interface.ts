import { IOffer } from './offer.interface';
import { IReview } from './review.interface';
import { ISpecification } from './specification.interface';
import { IService } from './service.interface';

export interface IProduct{
    id: number;
    Name: string;
    CategoryId: number;
    title: string;
    description: string;
    MarketPrice: number;
    sell_price: number;
    ModelNumber: string;
    img_url: string;
    Available: number;
    stock_quantity: number;
    shippingCharge: number;
    Features: string[];
    Specifications: ISpecification[];
    Offers: IOffer[];
    Reviews: IReview[];
    Services: IService[];
}