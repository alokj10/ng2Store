import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ConfigSettings{
    domain: Window;
    constructor(@Inject(Window)private win: Window){
            console.log('config created');
            this.domain = this.win;
            console.log('domain - ' + this.domain);
    }

    get environment(): string{
        if(this.domain.toString().search('http://localhost') != -1)
        {
            console.log('env - dev');
            return "dev";
        }
            console.log('env - prod');
        return "prod";
    }

    get apiUrl(): string{
        // return "http://localhost:9000/";
        if(this.environment === 'dev')
        {
            return 'http://localhost:9000/';
        }
        return 'http://nodestore-alokjha.rhcloud.com/';
    }


}