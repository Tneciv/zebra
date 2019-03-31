import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds = value - minutes * 60 > 9 ? (value - minutes * 60) : '0' + (value - minutes * 60);
    return minutes + ':' + seconds;
  }

}