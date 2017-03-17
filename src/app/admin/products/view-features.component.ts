import { Component, Input } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
    selector: 'so-view-features',
    templateUrl: './view-features.component.html',
    styleUrls: ['./view-features.component.css']
})
export class ViewFeaturesComponent{
    _productId: number;
    features: any[];
    
    @Input()
    set productId(productId: number){
        this._productId = productId;
        this.populateFeatures();
    }
    get productId(): number{
        return this._productId;
    }

    constructor(private productService: ProductService){
    }

    populateFeatures(){
        if(this.productId){
            this.productService.getFeatures(this.productId).subscribe(
                feats => this.features = feats,
                err => {
                    console.log('error occured - ' + err);
                }
            )
        }
    }
}