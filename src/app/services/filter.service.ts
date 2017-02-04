import { Injectable } from '@angular/core';
import { CriteriaItem } from '../products/filter/criteria-item';
import { CategoryFilterComponent } from '../products/filter/category-filter/category-filter.component';
import { PriceFilterComponent } from '../products/filter/price-filter/price-filter.component';

@Injectable()
export class FilterService{

    getFilterComponents(categoryId: number): CriteriaItem[]{
        let criterias: CriteriaItem[] = [];
        let criteriaItem = new CriteriaItem(CategoryFilterComponent,{catId: categoryId});
        criterias.push(criteriaItem); 
        criteriaItem = new CriteriaItem(PriceFilterComponent,{catId: categoryId});
        criterias.push(criteriaItem);

        return criterias; 
    }
}