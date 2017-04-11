import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../model/product.interface';
import { ProductService } from '../../app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemComponent } from '../products/product/product-item.component';
import { CartService } from '../../app/services/cart.service';

@Component({
    selector: 'so-view-cart',
    templateUrl: './view_cart.component.html'
})
export class ViewCartComponent implements OnInit, OnDestroy{
    products: IProduct[];
    itemsCount: number;
    totalAmount: number;
    @Input() isCheckout: boolean;

    constructor(private productService: ProductService,
                private cartService: CartService,
                private router: Router){
                    this.cartService.isCartVisible = false;
                 }
    
    ngOnInit(){
        this.getProductsFromCart().then(
            products => {
                    this.products = products;
                    this.itemsCount = this.products.length;
                    this.totalAmount = this.getTotal(products);
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
                total += (element.sell_price * element.stock_quantity); 
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
            total += element.sell_price * element.stock_quantity; 
        });
        return total;
    }
    
    getProductsFromCart(){
        return this.productService.get_products_from_user_cart();
    }

    removeItem(product: IProduct){
        this.products.splice(this.products.findIndex(x => x.id == product.id),1);
        this.productService.remove_from_user_cart(product);
    }

    checkout(){
        this.router.navigate(['/checkout']);
    }
    
    confirmOrder(){
        
    }
}