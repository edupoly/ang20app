import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  add(a:number,b:number,cb:any){
    cb(Number(a)+Number(b))
  }
  sub(a:number,b:number){
    return of(a-b)
  }
  mul(a:number,b:number){
    return a*b;
  }
  div(a:number,b:number){
    if(Number(b)===0){
      return Promise.reject('Denominator cannot be ZERO... please give a valid value')
    }
    else{
      return Promise.resolve(a/b)
    }
  }
}
// normal functions directly return result
// callback pattern where the result is passed to a callback function
// promise pattern where the result is passed as promiseobject
// observable pattern where the result is passed as Observable