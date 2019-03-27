import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicKeyPipe'
})
export class DynamicKeyPipe implements PipeTransform {

  transform(value: any): any {
    return value[value.type];
  }

}
