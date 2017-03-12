import { Injectable } from '@angular/core';

@Injectable()
export class ConfigSettings{

    constructor(){
console.log('config created');
    }

    get environment(): string{
        return "dev";
        // return "prod";
    }

    get apiUrl(): string{
        return "http://localhost:9000/";
    }


}