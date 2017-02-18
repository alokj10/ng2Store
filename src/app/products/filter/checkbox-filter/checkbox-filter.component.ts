import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { FilterService } from '../../../services/filter.service';

@Component({
    selector: 'checkbox-filter',
    templateUrl: './checkbox-filter.component.html',
    styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent{

    @Input() data: any;
    // @Output() runFilterFunction: EventEmitter<any>;

    checkedItems: string[];
    // cbItems: string[] = [];
    // sectionTitle: string;

    constructor(private filterService: FilterService){
        // this.sectionTitle = "Brand";
        this.checkedItems = [];
    }   

    runFilter(cbValue: string, checked: boolean){
        console.log('cb changed - ' + checked);
        if(checked)
        {
            this.checkedItems.push(cbValue);
        }
        else
        {
           this.checkedItems.splice(this.checkedItems.indexOf(cbValue, 0),1);
        }
        console.log('check items - ' + this.checkedItems.length);
        // this.runFilterFunction.emit(this.checkedItems);
        
        this.filterService.changeFilterValues(this.checkedItems);
    }

}