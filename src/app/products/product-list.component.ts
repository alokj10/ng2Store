import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'so-prod-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    private sub: any;
    private categoryId: number;
    constructor(private route: ActivatedRoute){
    }    

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.categoryId = +params['id'];
        })
    }
}