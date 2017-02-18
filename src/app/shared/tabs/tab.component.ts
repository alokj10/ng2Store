import { Component, Input } from '@angular/core';

@Component({
    selector: 'so-tab',
    styles: [`
    .pane{
        padding: 1em;
        } 
    `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent{
    @Input('tabTitle') title: string;
    @Input() step: string;
    @Input() active: boolean = false; 
}