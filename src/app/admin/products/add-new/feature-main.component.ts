import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ViewFeaturesComponent } from '../view-features.component';

@Component({
    selector: 'so-feature-main',
    templateUrl: './feature-main.component.html'
})
export class FeatureMainComponent{
        @Input()productId: number;
        @Output()onNext: EventEmitter<any> = new EventEmitter<any>();
        @ViewChild(ViewFeaturesComponent) viewFeaturesComponent: ViewFeaturesComponent;
        
        constructor(){

        }

        onFeatureNext(){
            this.onNext.emit(null);
        }

        featureAdded(){
            this.viewFeaturesComponent.populateFeatures();
        }
}