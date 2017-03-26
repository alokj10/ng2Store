import { Component } from '@angular/core';

@Component({
    templateUrl:    './add-new-product.component.html'
})
export class AddNewProductComponent{
    basicActive: boolean;
    featureActive: boolean;
    specActive: boolean;
    imageActive: boolean;
    productId: number;

    constructor(){
        this.setTabActive('basic');
    }

    setTabActive(tab: string){
        this.basicActive = false;
        this.featureActive = false;
        this.specActive = false;
        this.imageActive = false;

        if(tab === 'basic')
        {
            this.basicActive = true;
        }
        else if(tab === 'feature')
        {
            this.featureActive = true;
        }
        else if(tab === 'spec')
        {
            this.specActive = true;
        }
        else if(tab === 'image')
        {
            this.imageActive = true;
        }
    }

    onBasicSubmit(prodId: number){
        this.productId = prodId;
        this.setTabActive('feature');
    }

    onFeatureSubmit(){
        this.setTabActive('spec');
    }
    
    onSpecSubmit(){
        this.setTabActive('image');
    }

}