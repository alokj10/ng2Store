import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MockProducts } from '../data/mockProducts';

export class InMemoryProductService implements InMemoryDbService{
    createDb(){
        let products = MockProducts;
        return { products};
    }
}