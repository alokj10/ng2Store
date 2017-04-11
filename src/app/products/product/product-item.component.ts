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
        // return this.win + this.product.img_url;
        return this.config.apiUrl + this.product.img_url;
    }

    get subTotal(): number{
        return this.product.sell_price * this.product.stock_quantity;
        // return 1000;
    }    

    get price(): number{
        return this.product.sell_price;
        // return 1000;
    }    

    get stock_quantity(): number{
        return this.product.stock_quantity;
    }

    set stock_quantity(qty){
        this.product.stock_quantity = qty;
        console.log(qty);
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
    
    add_to_cart(product: IProduct){
        this.cartService.add_to_cart(product);
    }

    buy_now(product: IProduct){
        this.cartService.add_to_cart(product);
        this.router.navigate(['/checkout']);
    }

}