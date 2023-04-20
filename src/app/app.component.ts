import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang20app';
  constructor(){
    console.log("App component constructor called")
  }
  ngOnChange(){
    console.log("App component ngOnChanges called")
  }
  ngOnInit(){
    console.log("App component ngOnInit called")
  }
  // ngDoCheck(){
  //   console.log("App component ngDoCheck called")
  // }
  ngOnDestroy(){
    console.log("App component unmounted and ngOnDestroy called")
  }
}
