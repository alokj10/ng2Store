import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.interface';
//import { APP_BASE_HREF, Location } from '@angular/common';

@Component({
    selector: 'prod-detail',
    templateUrl: './prod_detail.component.html',
    styleUrls: ['./prod_detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
    @Input() product: IProduct;
    sub: any;
    imgUrl: string;
    
    constructor(private productService: ProductService,
                @Inject(Window)private win: Window,
                        private route: ActivatedRoute
        )    {
        this.imgUrl = this.win + 'assets/5.png';
        
    }
    
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
           let id = +params['id'];
           console.log('prod selected: ' + id);
           this.productService.getProduct(id)
               .then(product => { 
                   this.product = product;
                   console.log('product found: ' + this.product.Title);    
            }); 
        });
    }
    
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    
    goBack(){
        window.history.back();
    }
}