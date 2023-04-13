import { Component } from '@angular/core';
import { ArthService } from './arth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1:number=0;
  n2:number=0;
  res:any;
  constructor(public aS:ArthService){}
  a(){
    var r = this.aS.add(this.n1,this.n2)
    this.res=r;
  }
  s(){
    var r = this.aS.sub(this.n1,this.n2);
    this.res=r;
  }
  m(){
    var r = this.aS.mul(this.n1,this.n2)
    this.res=r;
  }
  d(){
    var r = this.aS.div(this.n1,this.n2);
    this.res=r;
  }
}
