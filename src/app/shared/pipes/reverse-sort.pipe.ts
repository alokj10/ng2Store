import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReverseSortPipe{
    transform(array: string[]): string[]{
        console.log('array - ' + array.length);
        let reverseArray = array.slice().reverse();
        return reverseArray;
    }
}