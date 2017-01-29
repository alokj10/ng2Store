import { Injectable } from '@angular/core';
import { ICategory } from '../model/category.interface';
import { MockCategories } from '../data/mockCategories';


@Injectable()
export class MenuService{
 
    allCategories = MockCategories;

    getLevel1MenuItems(): ICategory[]{
        let level1Categories = this.allCategories.filter(item => item.ParentId==0);
        return level1Categories;
    }

    getLevel2Items(parentCategoryId: number): ICategory[]{
        let level2Categories = this.allCategories.filter(
                                    item => item.ParentId === parentCategoryId
                                );
        return level2Categories;
    }

    getLevel3Items(parentCategoryId: number): ICategory[]{
        let level3Categories = this.allCategories.filter(
                                    item => item.ParentId === parentCategoryId
                                );
        return level3Categories;                                
    }
}