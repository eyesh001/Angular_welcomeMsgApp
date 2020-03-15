import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langSelectorBin'
})
export class LangSelectorBinPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
