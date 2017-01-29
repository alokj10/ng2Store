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
        this.subNavList = this.menuService.getLevel2Items(parentCategoryId);
    }

    public onSubmenuClosed = new EventEmitter();

    public subNavList: ICategory[] = [];
    public level3List: ICategory[] = [];
    public level3ListLeft: ICategory[] = [];
    public level3ListRight: ICategory[] = [];

    constructor(private menuService: MenuService){
    }

    get parentCategoryId(){
        return this._parentCategoryId;
    }

    ngAfterViewInit(){
        //let catItem = this.subNavList[0];
        //this.GetLevel3List(catItem);
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
        this.level3List = this.menuService.getLevel3Items(categoryItem.Id);
        this.selectedItem = categoryItem;
        // this.level3ListLeft = this.level3List.
    }
}