import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideemail'
})
export class HideemailPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    //console.log(value,args);
    
    const firstPart = value.substring(0,3);
    const secondPart = value.split('@')[1];



    //tch**********@gmail.com
    return firstPart+'*********@'+secondPart;
  }

}
