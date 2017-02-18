import { Component, Input } from '@angular/core';
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

    constructor(private router: Router,
                private route: ActivatedRoute,
                private cartService: CartService){}
    
    go_to_detail(product: IProduct){
        this.router.navigate(['/detail', product.Id]);
    }
    
    add_to_cart(product: IProduct){
        this.cartService.add_to_cart(product);
    }
}