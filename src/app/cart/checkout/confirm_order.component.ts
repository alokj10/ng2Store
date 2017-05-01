import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';

import { IProduct } from '../../model/product.interface';
import { ProductService } from '../../../app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemComponent } from '../../products/product/product-item.component';
import { CartService } from '../../../app/services/cart.service';

@Component({
    selector: 'so-confirm-order',
    templateUrl: './confirm_order.component.html'
})
export class ConfirmOrderComponent implements OnInit, OnDestroy{
    products: IProduct[];
    itemsCount: number;
    totalAmount: number;
    @Input() isCheckout: boolean = true;
    @Output() onConfirmOrder = new EventEmitter<any[]>();
    @Output() onRemoveItem = new EventEmitter<any>();

    constructor(private productService: ProductService,
                private cartService: CartService,
                private router: Router){
                    this.cartService.isCartVisible = false;
                 }
    
    ngOnInit(){
        this.getProductsFromCart().subscribe(
            products => {
                    this.products = products;
                    this.itemsCount = this.products.length;
                    this.totalAmount = this.getTotal(products);
                },
                err => {
                    console.log('error occured - ' + err);
                }
            );
        
    }
    
    ngOnDestroy(){
        this.cartService.isCartVisible = true;
    }

    get totalAmount1(){
        let total = 0;
        if(this.products != undefined)
        {
            this.products.forEach(element => {
                // element.price = (element.price * element.stock_quantity);
                if(!element.quantity){
                    element.quantity = 1;
                } 
                total += (element.sell_price * element.quantity); 
            });
         }
        return total;
    }

    get noItemsInCart(): boolean{
        if(this.products != undefined)
        {
            return this.products.length == 0;
        }
        else{
            return false;
        }
    }
 
   getTotal(products: IProduct[]){
        let total = 0;
        products.forEach(element => {
            // element.price = (element.price * element.stock_quantity);
            if(!element.quantity){
                element.quantity = 1;
            } 
            total += element.sell_price * element.quantity; 
        });
        return total;
    }
    
    getProductsFromCart(){
        return this.cartService.get_products_from_user_cart();
    }

    removeItem(product: IProduct){
        this.products.splice(this.products.findIndex(x => x.id == product.id),1);
        this.cartService.remove_from_user_cart(product).subscribe(x =>{
            this.onRemoveItem.emit(product);
            this.cartService.recalculateTotals();
        });
        
    }

    confirmOrder(){
        this.onConfirmOrder.emit(this.products);
    }
}