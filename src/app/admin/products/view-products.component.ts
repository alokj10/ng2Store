import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
    selector:   'so-view-products',
    templateUrl:    './view-products.component.html',
    styleUrls:  ['./view-products.component.css']   
})
export class ViewProductsComponent implements OnInit{
    product_items: any[];
    controls: any[] = [];

    constructor(private productService: ProductService){
        console.log('view products');
    }

    ngOnInit(){
            this.populateProducts();
            this.addControls();
    }
    
    populateProducts(){
        this.productService.getProducts()
                           .subscribe(
                                products => {
                                    console.log(products[0]);
                                    this.product_items = products
                                },
                                err => {
                                    console.log(err);
                                }
                            );
    }

    addControls(){
        // this.controls = [];
        this.controls.push(
                {
                    label: "Add New",
                    navigateUrl: 'admin/products/new'
                }
            );
        this.controls.push(
                {
                    label: "Export to Excel",
                    navigateUrl: 'admin/product/export'
                }
        );
    }

}