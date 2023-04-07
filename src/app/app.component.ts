import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang20app';
  price=200000;
  height=5;
  today=new Date();
  flag:any=null;
  sortByAsc(){
    this.flag='asc'
  }
  sortByDec(){
    this.flag='dec'
  }
  myvals=[10,34,28,19,13]
}
