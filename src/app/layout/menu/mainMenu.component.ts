import { Component } from '@angular/core';
import { ICategory } from '../../model/category.interface';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'so-mainMenu',
    templateUrl: './mainMenu.component.html',
    styleUrls: ['./mainMenu.component.css']
})
export class MainMenuComponent{

    private _showModal: boolean = false;
    public selectedCategoryId: number = 1;
    public navList: ICategory[] = [];

    constructor(private menuService: MenuService){
        this.navList = this.menuService.getLevel1MenuItems();
    }

    set showModal(showModal: boolean){
        this._showModal = showModal;
    }

    get showModal(): boolean{
        return this._showModal;
    }

    openSubMenu(level1Item: ICategory){
        console.log('sub menu open');
        this.selectedCategoryId = level1Item.Id;
        this.showModal = true;
        return false;
    }

    closeSubMenu(){
        console.log('reset selected');
        this.selectedCategoryId = 0;
        this.showModal = false;
    }
}