import { EventingService } from './../eventing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public eS:EventingService){}
  f1:any;
  sendToSec(){
    this.eS.sendToSecond(this.f1)
  }
}
