import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ICategory } from '../../model/category.interface';

@Component({
    selector: 'so-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.css'],
    outputs: ['onSubmenuClosed']
})
export class SubmenuComponent implements AfterViewInit{
    private _parentCategoryId: number;
    private selectedItem: ICategory;
    @Input() 
    set parentCategoryId(parentCategoryId: number){
        this._parentCategoryId = parentCategoryId;
        this.setLevel2Items(parentCategoryId);
        let defaultSelectedItems = this.subNavList.filter(x => x.Id === parentCategoryId);
        if(this.subNavList.length > 0){
            this.GetLevel3List(this.subNavList[0]);
        }
    }

    @Input() allCategories: ICategory[];

    public onSubmenuClosed = new EventEmitter();

    public subNavList: ICategory[] = [];
    public level3List: ICategory[] = [];

    constructor(private menuService: MenuService){
    }

    get parentCategoryId(){
        return this._parentCategoryId;
    }

    setLevel2Items(parentCategoryId: number){
        this.subNavList = this.allCategories.filter(
                item => item.ParentId == parentCategoryId);
    }

    setLevel3Items(parentCategoryId: number){
        this.level3List = this.allCategories.filter(
                item => item.ParentId == parentCategoryId);
    }

    ngAfterViewInit(){
    }

    clearMenu(){
        this.level3List = [];
    }

    closeSubmenu(){
        // this.selectedItem = {Id:0,Description:'',Name:'',ParentId:-1,Title:''};
        this.clearMenu();
        this.onSubmenuClosed.emit();
        return false;
    }

    GetLevel3List(categoryItem: ICategory){
        this.setLevel3Items(categoryItem.Id);
        this.selectedItem = categoryItem;
    }
}