import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
    selector:   'so-add-spec',
    templateUrl:    './add-spec.component.html',
    styleUrls:  ['./add-spec.component.css']
})
export class AddSpecComponent{
    @Input()productId: number;
    @Output()onAdd: EventEmitter<any> = new EventEmitter<any>();
    model: any;

    constructor(private productService: ProductService){
        this.model = {};
    }

    onSubmitSpecification(){
        console.log('model - ' + this.model);
        this.model.product_id = this.productId;
        this.productService.saveProductSpec(this.model).subscribe(
            spec => {
                console.log('spec returned - ' + spec.length);
                this.onAdd.emit(null);
                this.model = {};
            },
            err => {
                console.log('error occured - ' + err);
            }
        )
    }
}