import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'so-control-buttons',
    templateUrl: './control-button.component.html',
    styleUrls: ['./control-button.component.css']
})
export class ControlButtonComponent implements OnInit{
    @Input()controls: any[];

    constructor(private router: Router){

    }

    ngOnInit(){
        console.log('controls length - ' + this.controls.length);
    }

    navigate(navigateUrl: string){
        this.router.navigateByUrl(navigateUrl);
    }
}