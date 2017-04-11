import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ShippingService } from '../../services/shipping.service';

@Component({
    selector: 'so-delivery-address',
    templateUrl: './delivery_address.component.html',
    styleUrls: ['./delivery_address.component.css']
})
export class DeliveryAddressComponent{
    userid: number;
    @Output() onSaveDeliveryAddress = new EventEmitter<any>();
    showModal: boolean;
    addresses: any[];
    model: any;

    constructor(private shippingService: ShippingService){
        this.model = {};
        this.populateAllShippingAddress();
    }

    populateAllShippingAddress(){
        this.userid = 2;
        this.shippingService.getAllShippingAddress(this.userid)
                            .subscribe(ships => {
                                console.log('ships length ' + ships.length);
                                this.addresses = ships;
                            },
                            err => {
                                console.log('error occured ' + err);
                            })
    }

    saveDeliveryAddress(){
        console.log('save delivery: ');
        this.model.user_id = 2;
        this.shippingService.saveShippingAddress(this.model)
                            .subscribe(ship => {
                                console.log('ships length ' + ship.length);
                            },
                            err => {
                                console.log('error occured - ' + err);
                            })
    }

    updateShipping(addressItem: any){
         this.onSaveDeliveryAddress.emit(addressItem);
    }

    openAddPopup(){
        this.showModal = !this.showModal;
    }

    closeAddPopup(){
        this.showModal = !this.showModal;
    }
}