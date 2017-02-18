import { Injectable } from '@angular/core';
import { CriteriaItem } from '../products/filter/criteria-item';
import { PriceFilterComponent } from '../products/filter/price-filter/price-filter.component';
import { IFilterCriteria } from '../model/filterCriteria.interface';
import { Subject } from 'rxjs/';
import { MockProducts } from '../data/mockProducts';
import { MockCategories } from '../data/mockCategories';
import { MockOptions } from '../data/mockOptions';
import { MockProductOptions } from '../data/mockProductOptions';

@Injectable()
export class FilterService{

    filterCriterias: IFilterCriteria[] = [];
    private payLoad = new Subject<string[]>();
    payload$ = this.payLoad.asObservable();

    getFilterComponents(categoryId: number): IFilterCriteria[]{
        let products = MockProducts.filter(i => i.CategoryId == categoryId);
        let productOptions: any[] = [];
        MockProductOptions.map(item => {
            if(products.filter(p => p.Id == item.ProductId).length > 0)
            {
                productOptions.push(item);
            }
        });
        let optionValues: any[] = [];
        MockOptions.map(item => {
             let productOptionsFiltered = productOptions.filter(o => o.OptionId == item.Id);
             if(productOptionsFiltered.length > 0)
             {
                 optionValues.push({
                     categoryId: productOptionsFiltered[0].CategoryId,
                     optionValue:  item
                 });
             }
        });

        optionValues.map(item => {
            this.filterCriterias.push({
                // CategoryId: item.categoryId,
                Option_Id: item.optionValue.Id,
                Option_Title: item.optionValue.OptionTitle,
                Option_Style: item.optionValue.OptionStyle,
                Option_Values: item.optionValue.OptionValues 
            });
         });
         return this.filterCriterias;

    }

    changeFilterValues(values: string[]){
        this.payLoad.next(values);
    }

    getCategoryName(categoryId: number): string{
        let category = MockCategories.filter(x => x.Id === categoryId);
        if(category.length > 0)
        {
            return category[0].Title;
        }
        return '';
    }
}