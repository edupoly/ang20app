import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  add(a:number,b:number){
    return Number(a)+Number(b);
  }
  sub(a:number,b:number){
    return a-b;
  }
  mul(a:number,b:number){
    return a*b;
  }
  div(a:number,b:number){
    if(b===0){
      return 'Denominator cannot be ZERO... please give a valid value'
    }
    return a/b;
  }
}
// normal functions directly return result
// callback pattern where the result is passed to a callback function
// promise pattern where the result is passed as promiseobject
// observable pattern where the result is passed as Observable