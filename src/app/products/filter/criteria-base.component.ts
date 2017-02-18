import { EventEmitter } from '@angular/core';

export interface CriteriaBaseComponent{
    data: any;
    onChangeFunction: EventEmitter<any>;
}