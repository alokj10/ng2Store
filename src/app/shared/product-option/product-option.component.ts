import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductOptionItem } from './product-option.interface';

@Component({
    selector: 'so-product-option',
    templateUrl: './product-option.component.html',
    styleUrls: ['./product-option.component.css']
})
export class ProductOptionsComponent{
    optionItem: any;
    @Output()optionAddEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output()optionRemoveEvent: EventEmitter<any> = new EventEmitter<any>();
    isAdded: boolean;
    types: string[];

    constructor(){
        this.isAdded = false;
        this.types = [];
        this.types.push("Dropdown");
        this.types.push("Radio");
        this.types.push("check");

        this.optionItem = {};
        this.optionItem.isAdded = false;
        // this.optionItem.label ="Size";
        // this.optionItem.name = "size";
        // this.optionItem.type = "dropdown";
        this.optionItem.options = [];
        // this.optionItem.options.push("XL");
        // this.optionItem.options.push("XXL");
        // this.optionItem.options.push("Large");

    }

    optionAdded(){
        console.log('in child ' + this.optionItem.name);
        this.optionItem.isAdded = true;
        this.optionAddEvent.emit(this.optionItem);
        this.isAdded = true;
    }

    optionRemoved(){
        this.optionItem.isAdded = false;
        this.optionRemoveEvent.emit(this.optionItem);
    }
}