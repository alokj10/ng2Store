import { Component, Input } from '@angular/core';

import { FilterService } from '../../../services/filter.service';

@Component({
    selector:   'so-add-image',
    templateUrl:    './add-image.component.html'
})
export class AddImageComponent{
    @Input()productId: number;
    constructor(){
        
    }
}