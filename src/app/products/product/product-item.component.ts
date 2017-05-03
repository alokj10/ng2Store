import { Component, Input, Inject } from '@angular/core';
import { IProduct } from '../../model/product.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigSettings } from '../../services/configSettings.service';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html'
})
export class ProductItemComponent{

    @Input() product: any;
    @Input() products: IProduct[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                @Inject(Window)private win: Window,
                private config: ConfigSettings,
                private cartService: CartService){
                            
                }

    get img_url(): string{
        return this.config.apiUrl + this.product.img_url;
    }

    get subTotal(): number{
        return this.product.sell_price * this.quantity;
    }    

    get price(): number{
        return this.product.sell_price;
    }    

    get stock_quantity(): number{
        return this.product.stock_quantity;
    }

    set stock_quantity(qty){
        this.product.stock_quantity = qty;
    }
    
    get shippingChargeText(): string{
        if(!this.product.shippingCharge){
            return "FREE";
        }
        return 'INR ' + this.product.shippingCharge;
    }
    
    get quantity(): number{
        if(!this.product.quantity){
            this.product.quantity = 1;
        }
        return this.product.quantity;
    }

    set quantity(qty){
        this.product.quantity = qty;
    }

    get itemsCount(){
        return this.products.length;
    }

    get ratingCountMessage(){
        var msg = "No Ratings Yet";
        if(this.product.reviews){
            msg = this.product.reviews.length + ' Ratings';
        }
        return msg;
    }
    
    go_to_detail(product: IProduct){
        this.router.navigate(['/detail', product.id]);
    }
    
    add_to_cart(){
        this.product.quantity = this.quantity;
        this.product.price = this.price;
        this.cartService.add_to_cart(this.product);
    }

    buy_now(){
        this.cartService.add_to_cart(this.product);
        this.router.navigate(['/checkout']);
    }

}