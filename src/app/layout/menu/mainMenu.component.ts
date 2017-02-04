import { Component, ViewChild } from '@angular/core';
import { ICategory } from '../../model/category.interface';
import { MenuService } from '../../services/menu.service';
import { SubmenuComponent } from './submenu.component';

@Component({
    selector: 'so-mainMenu',
    templateUrl: './mainMenu.component.html',
    styleUrls: ['./mainMenu.component.css']
})
export class MainMenuComponent{

    private _showModal: boolean = false;
    public allCategories: ICategory[] = [];
    public _selectedCategoryId: number = 1;
    public navList: ICategory[] = [];

    @ViewChild(SubmenuComponent) submenuComponent:SubmenuComponent;

    constructor(private menuService: MenuService){
        this.menuService.getLevel1MenuItems()
                        .then(categories => {
                            this.allCategories = categories;
                            this.setNavList(categories);
                        });
    }

    setNavList(categories: ICategory[]){
        this.navList = categories.filter(item => item.ParentId == 0);
    }

    set showModal(showModal: boolean){
        this._showModal = showModal;
    }

    get showModal(): boolean{
        return this._showModal;
    }

    set selectedCategoryId(selectedCategoryId: number){
        this._selectedCategoryId = selectedCategoryId;
    }

    get selectedCategoryId(): number{
        return this._selectedCategoryId;
    }

    openSubMenu(level1Item: ICategory){
        this.selectedCategoryId = level1Item.Id;
        this.submenuComponent.parentCategoryId = this.selectedCategoryId;
        this.showModal = true;
        return false;
    }

    closeSubMenu(){
        this.selectedCategoryId = 0;
        this.showModal = false;
    }
}