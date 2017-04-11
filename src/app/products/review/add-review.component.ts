import { Component, Input } from '@angular/core';

import { ReviewService } from '../../services/review.service';

@Component({
    selector: 'so-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent{
    model: any;
    submitted: boolean = false;
    @Input() productId: number;

    constructor(private reviewService: ReviewService){
        this.model = {};
    }

    rate(rating: number){
        this.model.rating = rating;
    }

    submitReviewRating(){
        this.model.product_id = this.productId;
        this.reviewService.saveReviewRating(this.model)
                           .subscribe(revs => {
                               console.log('revs returned ' + revs);
                               this.submitted = true;
                           },
                           err => {
                               console.log('error occurred ' + err);
                           })
    }
}