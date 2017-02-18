import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'so-delivery-address',
    templateUrl: './delivery_address.component.html'
})
export class DeliveryAddressComponent{
    @Output() onSaveDeliveryAddress = new EventEmitter<boolean>();

    saveDeliveryAddress(){
        console.log('save delivery: ');
        this.onSaveDeliveryAddress.emit(true);
    }
}