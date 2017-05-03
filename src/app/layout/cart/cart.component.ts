import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs/Subscription';
import { IProduct } from '../../model/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'so-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
    items: number;
    total: number;
    products: IProduct[]=[];
    subscription: Subscription;
    _showDropdown: boolean = false;
    shippingChargesTotal: number;

    set showDropdown(showDropdown: boolean){
        this._showDropdown = showDropdown;
    }
    get showDropdown(): boolean{
        return this._showDropdown;
    }
    
    toggleDropdown(){
        this.showDropdown = !this.showDropdown;
    }

    constructor(private cartService: CartService,
                private productService: ProductService){
        this.items = 0;
        this.total = 0;
        this.shippingChargesTotal = 0;
        this.subscription = this.cartService.payload$.subscribe(m => this.item_added(m));
    }
    
    ngOnInit(){
        this.cartService.get_products_from_user_cart().subscribe(
            products => {
                    this.products = products;
                    this.cartService.loadCartItems(this.products);
                    this.calculateTotal();
                }
            );

    }

    get viewMsg(){
        if(this.products.length > 0){
            return "View Cart";
        }
        else{
            return "No Items in Cart";
        }
    }
    
    item_added(product: IProduct){
        this.items++;
        this.total = this.total + product.sell_price;
        this.add_to_user_cart(product);
    }
    
    add_to_user_cart(product: IProduct){
        this.products.push(product);
        this.calculateTotal();
        this.cartService.add_to_user_cart(product).subscribe(
            products => {
                // this.cartService.get_products_from_user_cart().subscribe(
                //     products => {
                //             this.products = products;
                //             this.calculateTotal();
                //         }
                //     );
            },
            err => {
                console.log('error occured - ' + err);
            });
        
    }
    
    removeItem(product: any){
        this.cartService.remove_from_user_cart(product.uc_id)
            .subscribe(p => {
                    this.cartService.get_products_from_user_cart().subscribe(
                        products => {
                                this.products = products;
                                this.calculateTotal();
                            }
                        );
                });
    }

    calculateTotal(){
        // this.total = 0;
        this.items = 0;
        this.products.forEach(product => {
            // if(!product.quantity){
            //     product.quantity = 1;
            // }
            // this.total += product.sell_price * product.quantity;
            // this.shippingChargesTotal += product.shippingCharge;
            this.items++; 
            // this.cartService.updateTotal(this.total);
            // this.cartService.updateShippingCharges(this.shippingChargesTotal);
        });
        this.cartService.recalculateTotals();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}