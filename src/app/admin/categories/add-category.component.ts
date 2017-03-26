import { Component } from '@angular/core';

import { FilterService } from '../../services/filter.service';

@Component({
    selector:   'so-add-category',
    templateUrl:    './add-category.component.html'
})
export class AddCategoryComponent{
    model: any;
    submitted = false;
    categories: any[];
    submitText: string;

    constructor(private filterService: FilterService){
        this.model = {};
        this.submitText = "Add";
    }

    populateCategories(cats: any[]){
        console.log('add cat received' + cats.length);
        this.categories = cats;
    }

    editStart(editModel: any){
        this.model = editModel;
        this.submitText = "Update"; 
    }

    deleteStart(deleteModel: any){
        this.model = deleteModel;
        this.submitText = "Delete";
    }

    submitCategoryForm(){
        this.submitted = true;
        console.log('category model - ' + this.model.parent_category_id);
        if(this.submitText === "Add"){
            this.AddCategory();
        }
        else if(this.submitText === "Update"){
            this.UpdateCategory();
        }
        else if(this.submitText === "Delete"){
            this.DeleteCategory();
        }
        
    }

    AddCategory(){
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

    UpdateCategory(){
        this.filterService.updateCategory(this.model).subscribe(
            cats => {
                console.log('cat updated - ' + cats);
                this.model = {};
                this.filterService.categoryAdded();
            }
        )
    }

    DeleteCategory(){
        this.filterService.deleteCategory(this.model).subscribe(
            cats => {
                console.log('cat deleted - ' + cats);
                this.model = {};
                this.filterService.categoryAdded();
            }
        )
    }
}