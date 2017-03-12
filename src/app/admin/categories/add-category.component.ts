import { Component } from '@angular/core';

import { FilterService } from '../../services/filter.service';

@Component({
    selector:   'so-add-category',
    templateUrl:    './add-category.component.html'
})
export class AddCategoryComponent{
    model: any;
    submitted = false;

    constructor(private filterService: FilterService){
        this.model = {};
    }

    submitCategoryForm(){
        this.submitted = true;
        console.log('category model - ' + this.model);
        this.filterService.addCategory(this.model).subscribe(
            cats => {
                console.log('cat added - ' + cats);
                this.model = {};
                this.filterService.categoryAdded();
            },
            err => {
                console.log('cat add error - ' + err);
            }
        );
    }
}