import { Component } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

import { FilterService } from '../../services/filter.service';

@Component({
    selector:   'so-view-categories',
    templateUrl:    './view-categories.component.html'
})
export class ViewCategoriesComponent{
    categories: any[];
    subscription: Subscription;

    constructor(private filterService: FilterService){
        this.populateCategories();
        this.subscription = this.filterService.payloadCategoryAdded$.subscribe(i => this.cat_added());
    }

    cat_added(){
        console.log('cat populate triggered');
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
}