import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MockCategories } from '../data/mockCategories';
import { MockProducts } from '../data/mockProducts';
import { MockOrders } from '../data/mockOrders';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let categories = MockCategories;
        let level1Categories = MockCategories.filter(item => item.ParentId == 0);
        let products = MockProducts;
        let orders = MockOrders;
        return { 
            "categories": categories,
            "level1Categories": level1Categories,
            "products": products,
            "orders": orders
         };
    }
}