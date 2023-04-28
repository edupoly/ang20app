import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventingService {

  constructor() { }
  Abc = new EventEmitter();
  sendToSecond(x:any){
    this.Abc.emit(x)
  }

}
