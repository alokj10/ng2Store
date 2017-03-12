import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterAreaComponent } from './filter/filter-area/filter-area.component';
import { IProduct } from '../model/product.interface';
import { MockProducts } from '../data/mockProducts';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../services/product.service';
import { FilterService } from '../services/filter.service';

@Component({
    selector: 'so-prod-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    private sub: any;
    categoryId: number;
    categoryTitle: string;
    filterSubscription: Subscription;
    @ViewChild(FilterAreaComponent) filterAreaComponent: FilterAreaComponent; 
    products: any[];
    imgUrl: string;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                @Inject(Window)private win: Window,
                private filterService: FilterService){
        this.imgUrl = this.win + 'assets/5.png';
        this.filterSubscription = this.filterService
                                      .payload$
                                      .subscribe(i => 
                                                this.getProductsByFilter(i)
                                                );
    }    

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.categoryId = +params['id'] || 0;
            this.populateProducts();
            this.setCategoryTitle();
            this.filterAreaComponent.clear();
            this.filterAreaComponent.load();
        })
    }

    populateProducts(){
        let products = this.productService.getProducts()
                            .subscribe(
                                products => {
                                    console.log(products[0]);
                                    this.products = products
                                },
                                err => {
                                    console.log(err);
                                }
                            );
        // this.products = MockProducts.filter(x => x.CategoryId === this.categoryId);
        // if(this.products.length === 0){
        //     this.products = MockProducts;
        // }
    }

    setCategoryTitle(){
        this.categoryTitle = this.filterService.getCategoryName(this.categoryId);
    }

    getProductsByFilter(values: string[]){
        this.products = this.productService.getProductsByBrand(values);
    }
}