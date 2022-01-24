import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: any) {
    value = value.charAt(0) != 0 ? "0" + value : "" + value;

    let newValue = "";
    let i = 0;

    for (;i < Math.floor(value.length / 2) - 1; i++) {
      newValue = newValue + value.substr(i*2, 2) + ".";
    }

    return newValue + value.substr(i*2);
  }

}
