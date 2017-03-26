import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ViewSpecComponent } from '../view-spec.component';

@Component({
    selector: 'so-spec-main',
    templateUrl: './spec-main.component.html'
})
export class SpecMainComponent{
        @Input()productId: number;
        @Output()onNext: EventEmitter<any> = new EventEmitter<any>();
        @ViewChild(ViewSpecComponent) viewSpecComponent: ViewSpecComponent;
        
        constructor(){

        }

        onSpecNext(){
            this.onNext.emit(null);
        }

        specAdded(){
            this.viewSpecComponent.populateSpecifications();
        }
}