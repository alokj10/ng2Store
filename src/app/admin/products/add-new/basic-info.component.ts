import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductOptionItem } from '../../../shared/product-option/product-option.interface';

import { FilterService } from '../../../services/filter.service';

@Component({
    selector:   'so-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBasicInfoComponent{
    defaultOptionItem: any;
    options: any[];
    savedOptions: any[];
    categories: any[] = [];

    constructor(private filterService: FilterService){
        this.options = [];
        this.savedOptions = [];

        this.defaultOptionItem = {};

        this.options.push(this.defaultOptionItem);
        
        this.populateCategories();
    }

    populateCategories(){
        this.filterService.getCategories().subscribe(
            cats => {
                this.categories = cats;
                console.log('cats returned - ' + cats.length);
            },
            err => {
                console.log('error returned - ' + err);
            }
        )
    }


    optionAdded(optionItem: any){
        console.log('to add - ' + optionItem.name);
        this.options.push(optionItem);
        this.savedOptions.push(optionItem);
        this.defaultOptionItem = {};
        this.defaultOptionItem.options = [];
    }

    optionRemoved(optionItem: any){
        console.log('to remove - ' + optionItem.name);
        let index: number = this.savedOptions.indexOf(optionItem);
        console.log('index remove - ' + index);
        this.options = this.options.slice(index,1);
        this.savedOptions.slice(index,1);
    }

}