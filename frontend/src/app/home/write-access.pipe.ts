import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'writeAccessPipe'
})
export class WriteAccessPipe implements PipeTransform {

  transform(value: any): any {
    return value === true ? '读写' : '只读';
  }

}
