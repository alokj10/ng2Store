import { Component, ViewChild } from '@angular/core';
import { ICategory } from '../../model/category.interface';
import { MenuService } from '../../services/menu.service';
import { SubmenuComponent } from '../../shared/menu/submenu.component';

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
        console.log('menu create');
        this.menuService.getAllCategories()
                        .subscribe(categories => {
                            this.allCategories = categories;
                            this.setNavList(categories);
                        });
    }

    setNavList(categories: ICategory[]){
        console.log('menu set ' + categories[0].parent_category_id);
        this.navList = categories.filter(item => item.parent_category_id == 0);
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
        this.selectedCategoryId = level1Item.id;
        this.submenuComponent.parentCategoryId = this.selectedCategoryId;
        this.showModal = true;
        return false;
    }

    closeSubMenu(categoryItem: any){
        this.selectedCategoryId = 0;
        this.showModal = false;
    }
}