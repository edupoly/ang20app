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
    this.aS.add(this.n1,this.n2,(r:any)=>{this.res=r})
  }
  s(){
    this.aS.sub(this.n1,this.n2)
    .subscribe({
      next:(res)=>{console.log('next',res)},
      complete:()=>{console.log('complete')},
      error:(err)=>{console.log(err)}
    })
    
  }
  m(){
    var r = this.aS.mul(this.n1,this.n2)
    this.res=r;
  }
  d(){
    this.aS.div(this.n1,this.n2)
    .then((data)=>{this.res=data})
    .catch((err)=>{this.res=err})
  }
}
