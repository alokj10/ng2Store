import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

import { FilterService } from '../../services/filter.service';

@Component({
    selector:   'so-view-categories',
    templateUrl:    './view-categories.component.html',
    styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent{
    categories: any[];
    subscription: Subscription;
    @Output()categoriesLoaded: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output()editStarted: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output()deleteStarted: EventEmitter<any[]> = new EventEmitter<any[]>();

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
                this.categoriesLoaded.emit(cats);
            },
            err => {
                console.log('error returned - ' + err);
            }
        )
    }

    editHandle(categoryItem: any){
        this.editStarted.emit(categoryItem);
    }

    deleteHandle(categoryItem: any){
        this.deleteStarted.emit(categoryItem);
    }
}