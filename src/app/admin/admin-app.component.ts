import { Component } from '@angular/core';

@Component({
    templateUrl: './admin-app.component.html'
})
export class AdminAppComponent{
    sideWidth: number = 3;
    mainWidth: number = 9;
    constructor(){
        this.toggled(false);
    }

    toggled(collapse: boolean){
        if(collapse){
            this.sideWidth = 1;
            this.mainWidth = 11;
        }
        else{
            this.sideWidth = 3;
            this.mainWidth = 9;
        }
    }
}