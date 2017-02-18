import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { IBreadcrumb } from '../../model/breadcrumb.interface'; 
import "rxjs/add/operator/filter";

@Component({
    selector: 'so-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit{
    breadcrumbs: IBreadcrumb[];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router){
                    this.breadcrumbs = [];
                }

    ngOnInit(){
        console.log('bread init');
        const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';
        //subscribe to the NavigationEnd event
        this.router.events.filter(event => 
                                    event instanceof NavigationEnd)
                          .subscribe(event => {
            //set breadcrumbs
        console.log('bread nav');
            let root: ActivatedRoute = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
        console.log('bread length - ' + this.breadcrumbs.length);
        });
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string="", 
                            breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
            const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

            //get the child routes
            let children: ActivatedRoute[] = route.children;

                console.log('children len - ' + children.length);
            //return if there are no more children
            if (children.length === 0) {
            return breadcrumbs;
            }

            //iterate over each children
            for (let child of children) {
            //verify primary route
                console.log('child outlet - ' + child.outlet + ' - ' + PRIMARY_OUTLET);
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

console.log('snapshot ' + child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB));
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                //continue;
            }

            //get the route's URL segment
            let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

            //append route URL to URL
            url += `/${routeURL}`;

            //add breadcrumb
            let breadcrumb: IBreadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            
            //we should never get here, but just in case
            return breadcrumbs;
  }

}