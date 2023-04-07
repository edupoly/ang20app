import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abc',
  pure:true
})
export class AbcPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    console.log("abc transform function")
    if(args[0]==='dec'){
      value.sort().reverse();
      console.log(value)
    }
    else{
      value.sort();
    }
    return [...value];
  }

}
