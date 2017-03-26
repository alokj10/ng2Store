import { Component, ViewChild } from '@angular/core';

import { AddCategoryComponent } from './add-category.component';

@Component({
    templateUrl:    './category-main.component.html'
})
export class CategoryMainComponent{
    categories: any[];
    @ViewChild(AddCategoryComponent) addCategoryComp: AddCategoryComponent

    constructor(){
        
    }

    categoriesLoaded(cats: any[]){
        console.log('main cat received' + cats.length);
        this.categories = cats;
        this.addCategoryComp.populateCategories(cats);
    }

    editHandle(categoryItem: any){
        this.addCategoryComp.editStart(categoryItem);
    }
    
    deleteHandle(categoryItem: any){
        this.addCategoryComp.deleteStart(categoryItem);
    }
}