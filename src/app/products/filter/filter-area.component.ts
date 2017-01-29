import { Component, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ContentHostDirective } from '../../directives/content-host.directive';
import { CriteriaItem } from './criteria-item';
import { CategoryFilterComponent } from './category-filter.component';
import { CriteriaBaseComponent } from './criteria-base.component';

@Component({
    selector: 'so-filter',
    templateUrl: './filter-area.component.html',
    styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements AfterViewInit{
    @ViewChild(ContentHostDirective) contentHost: ContentHostDirective;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver){

    }

    ngAfterViewInit(){
        this.loadFilterCriterias();
    }

    loadFilterCriterias(){
        let criteriaItem = new CriteriaItem(CategoryFilterComponent,
                                            {
                                                name:"xyz",id:2
                                            });
        let componentFactory  = this._componentFactoryResolver
                                .resolveComponentFactory(criteriaItem.component);

        let viewContainerRef = this.contentHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<CriteriaBaseComponent>componentRef.instance).data = criteriaItem.data;                                                                            
    }
}