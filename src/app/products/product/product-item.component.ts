import { Component, Input, Inject } from '@angular/core';
import { IProduct } from '../../model/product.interface';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html'
})
export class ProductItemComponent{

    @Input() product: IProduct;
    @Input() products: IProduct[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                @Inject(Window)private win: Window,
                private cartService: CartService){
                            
                }

    get imgUrl(): string{
        return this.win + this.product.ImgUrl;
    }

    get subTotal(): number{
        return this.product.SellingPrice * this.product.Quantity;
        // return 1000;
    }    

    get price(): number{
        return this.product.SellingPrice;
        // return 1000;
    }    

    get quantity(): number{
        return this.product.Quantity;
    }

    set quantity(qty){
        this.product.Quantity = qty;
        console.log(qty);
    }

    get itemsCount(){
        return this.products.length;
    }
    
    go_to_detail(product: IProduct){
        this.router.navigate(['/detail', product.Id]);
    }
    
    add_to_cart(product: IProduct){
        this.cartService.add_to_cart(product);
    }

    buy_now(product: IProduct){
        this.cartService.add_to_cart(product);
        this.router.navigate(['/checkout']);
    }

}