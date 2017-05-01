import { Component, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { FilterService } from '../../../services/filter.service';
import { ConfigSettings } from '../../../services/configSettings.service';

@Component({
    selector:   'so-add-image',
    templateUrl:    './add-image.component.html'
})
export class AddImageComponent{
    @Input()productId: number;
    private apiUrl: string = '';
    // public uploader:FileUploader = new FileUploader({url:'http://localhost:9000/api/products/upload'});
    public uploader: FileUploader;
    
    constructor(private config: ConfigSettings){
        this.apiUrl = config.apiUrl + 'api/products/upload';
        this.uploader = new FileUploader({
                                            url:this.apiUrl
                                        });
    }

    ngOnInit() {
        this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
            console.log('upload img - ' + fileItem.file.name);
            form.append('product_id', this.productId);
            form.append('img_url', fileItem.file.name);
        };
    }
    
    // onSubmitImage(){
    //     console.log('model - ' + this.model);
    //     this.model.product_id = this.productId;
    //     this.productService.saveProductFeature(this.model).subscribe(
    //         feats => {
    //             console.log('feats returned - ' + feats.length);
    //             this.onAdd.emit(null);
    //         },
    //         err => {
    //             console.log('error occured - ' + err);
    //         }
    //     )
    // }
}