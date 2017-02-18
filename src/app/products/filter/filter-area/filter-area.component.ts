import { Component, AfterViewInit, ViewChild, ViewContainerRef,
         ComponentFactory, ComponentFactoryResolver, Input } from '@angular/core';
import { ContentHostDirective } from '../../../directives/content-host.directive';
import { CriteriaItem } from '../criteria-item';
import { CheckboxFilterComponent } from '../checkbox-filter/checkbox-filter.component';
import { CriteriaBaseComponent } from '../criteria-base.component';
import { FilterService } from '../../../services/filter.service';

@Component({
    selector: 'so-filter',
    templateUrl: './filter-area.component.html',
    styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements AfterViewInit{
    @ViewChild(ContentHostDirective) contentHost: ContentHostDirective;
    viewContainerRef: ViewContainerRef;
    @Input()categoryId: number;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver,
                private _filterService: FilterService){

    }

    ngAfterViewInit(){
        // this.viewContainerRef = this.contentHost.viewContainerRef;
        // this.viewContainerRef.clear();
        // let dynamicCriteria = this.getCriteriaItem(); 
        // this.loadFilterCriteria(dynamicCriteria.component,dynamicCriteria.data);
        // // this.loadFilterCriteria(dynamicCriteria.component,dynamicCriteria.data);
        // this._filterService.getFilterComponents(this.categoryId);
    }

    clear(){
        //console.log('what is viewcontainerref: ' + this.viewContainerRef);
        if(this.viewContainerRef != undefined && this.viewContainerRef != null){
            this.viewContainerRef.clear();
            this.viewContainerRef = null;

        }
    }

    load(){
        this.viewContainerRef = this.contentHost.viewContainerRef;
        this.viewContainerRef.clear();
        // let dynamicCriteria = this.getCriteriaItem(); 
        // this.loadFilterCriteria(dynamicCriteria.component,dynamicCriteria.data);
        // this.loadFilterCriteria(dynamicCriteria.component,dynamicCriteria.data);
        this.categoryId = 27;
        let criterias = this._filterService.getFilterComponents(this.categoryId);
        criterias.forEach(item => {
            if(item.Option_Style == "cb"){
              let criteriaItem = new CriteriaItem(CheckboxFilterComponent,
                    {
                        "title": item.Option_Title,
                        "cbItems": item.Option_Values
                    });
              this.loadFilterCriteria(criteriaItem.component,criteriaItem.data);
                
            }
        });
    }

    onChangeFunction(items: any){
        console.log('event reached top');
    }

    getCriteriaItem(): any{
        let criteriaItem = new CriteriaItem(CheckboxFilterComponent,
                {
                    "title": "Brand",
                    "cbItems": ["option 1", "option 2"]
                })
        return criteriaItem;
    }

    loadFilterCriteria(component: any, data: any){
        let criteriaItem = new CriteriaItem(component,data);
        let componentFactory  = this._componentFactoryResolver
                                .resolveComponentFactory(criteriaItem.component);


        // return componentFactory;
        //viewContainerRef.clear();

        let componentRef = this.viewContainerRef.createComponent(componentFactory);
        (<CriteriaBaseComponent>componentRef.instance).data = criteriaItem.data;                                                                            
    }
}