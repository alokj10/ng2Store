import { Component, Input, OnInit } from '@angular/core';

import { ReviewService } from '../../services/review.service';

@Component({
    selector: 'so-view-review',
    templateUrl:    './view-reviews.component.html',
    styleUrls:  ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit{
    @Input() productId: number;
    reviews: any[];

    constructor(private reviewService: ReviewService){

    }

    ngOnInit(){
        this.populateReviews();
    }

    populateReviews(){
        this.reviewService.getReviewRating(this.productId)
                          .subscribe(revs => {
                              this.reviews = revs;
                              this.reviews.forEach(item => {
                                  item.activeStars = Array(item.rating);
                                  item.greyStars = Array((5 - item.rating));
                                  console.log('active - ' + item.rating)
                              })
                          },
                          err => {
                              console.log('error occured - ' + err);
                          })
    }

}