import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray'
})
export class NumToArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number[] {
    if (typeof value === 'number') {
      return [...Array(value).keys()];
    }
    return [];
  }

}
