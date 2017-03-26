import { Component, Input } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
    selector: 'so-view-spec',
    templateUrl: './view-spec.component.html',
})
export class ViewSpecComponent{
    _productId: number;
    specifications: any[];
    
    @Input()
    set productId(productId: number){
        this._productId = productId;
        this.populateSpecifications();
    }
    get productId(): number{
        return this._productId;
    }

    constructor(private productService: ProductService){
    }

    populateSpecifications(){
        if(this.productId){
            this.productService.getSpecifications(this.productId).subscribe(
                specs => this.specifications = specs,
                err => {
                    console.log('error occured - ' + err);
                }
            )
        }
    }
}