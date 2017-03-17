import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'so-side-menu',
    templateUrl:    './side-menu.component.html',
    styleUrls:  ['./side-menu.component.css']
})
export class SideMenuComponent{
    sideWidth: number = 300;
    @Output()toggleClick: EventEmitter<boolean> = new EventEmitter<boolean>();
    collapse: boolean = false;

    constructor(){

    }

    toggleClicked(){
        // this.collapse = !this.collapse;
        // if(this.collapse){
        //     this.sideWidth = 200;
        // }
        // else{
        //     this.sideWidth = 300;
        // }
        // this.toggleClick.emit(this.collapse);
    }
}