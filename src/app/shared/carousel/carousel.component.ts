import { Component } from '@angular/core';
import { Image } from '../../model/image.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'so-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
    images: Image[] = [];
    constructor(){
        this.images.push({
            title: 'A new carousel component 1',
            url: '../../public/images/1.png'
        });
        this.images.push({
            title: 'A new carousel component 2',
            url: '../../public/images/2.png'
        });
        this.images.push({
            title: 'A new carousel component 3',
            url: '../../public/images/3.png'
        });
        this.images.push({
            title: 'A new carousel component 4',
            url: '../../public/images/4.png'
        });
        this.images.push({
            title: 'A new carousel component 5',
            url: '../../public/images/5.png'
        });
    }
}