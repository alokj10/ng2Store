import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.interface';
//import { APP_BASE_HREF, Location } from '@angular/common';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'prod-detail',
    templateUrl: './prod_detail.component.html',
    styleUrls: ['./prod_detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
    @Input() product: IProduct;
    features: any[];
    specifications: any[];
    sub: any;
    img_url: string;

    constructor(private productService: ProductService,
                private locationService: LocationService,
                @Inject(Window)private win: Window,
                        private route: ActivatedRoute
        )    {
        this.img_url = this.win + 'assets/5.png';

    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
           let id = +params['id'];
           console.log('prod selected: ' + id);
           this.productService.getProduct(id)
               .subscribe(product => {
                   this.product = product;
                   console.log('product found: ' + this.product.title);
            });
            
            this.productService.getFeatures(id)
                .subscribe(fe => {
                    this.features = fe;
                })
            this.productService.getSpecifications(id)
            .subscribe(specs => {
                this.specifications = specs;
            })
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    goBack(){
        window.history.back();
        // this.locationService.getLocation(2)
        //     .then(l => {
        //     console.log('res - ' + l);
        // });
    }
}