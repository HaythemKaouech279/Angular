import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): any {
    if(!value.replace(/\s/g, '').length) return "assets/default.jpg"
    if(!value.length)return "assets/default.jpg"
    return value;
  }

}
