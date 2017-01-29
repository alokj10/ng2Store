import { Component, Input, Output, EventEmitter,
         OnInit } from '@angular/core';

@Component({
    selector: 'so-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
    @Input() closable: boolean;
    @Output() toggleVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _visible: boolean;
    @Input()
    set visible(visible: boolean){
        this._visible = visible;
    }

    get visible(): boolean{
        return this._visible;
    }

    constructor(){
    }

    ngOnInit(){

    }

    closeModal(){
        this.visible = false;
        this.toggleVisibility.emit(this.visible);
    }
}