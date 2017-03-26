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
        this.subscription = this.cartService.payload$.subscribe(m => this.item_added(m));
    }
    
    ngOnInit(){
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
        //this.products.push(product);
        this.productService.add_to_user_cart(product);
        
        this.productService.get_products_from_user_cart().then(
            products => {
                    this.products = products;
                    this.calculateTotal();
                }
            );
    }
    
    removeItem(product: IProduct){
        this.productService.remove_from_user_cart(product);
        this.productService.get_products_from_user_cart().then(
            products => {
                    this.products = products;
                    this.calculateTotal();
                }
            );
    }

    calculateTotal(){
        this.total = 0;
        this.items = 0;
        this.products.forEach(product => {
            this.total += product.sell_price * product.stock_quantity;
            this.items++; 
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}