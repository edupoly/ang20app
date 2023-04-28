import { EventingService } from './../eventing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  firstVal:any;
  constructor(public eS:EventingService){
  }
  ngOnInit(){
    this.eS.Abc.subscribe((res)=>{
      this.firstVal=res;
    })
  }
}
