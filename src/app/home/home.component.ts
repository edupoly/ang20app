import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){
    console.log("Home component constructor called")
  }
  ngOnChange(){
    console.log("Home component ngOnChanges called")
  }
  ngOnInit(){
    console.log("Home component ngOnInit called")
  }
  ngDoCheck(){
    console.log("Home component ngDoCheck called")
  }
  ngOnDestroy(){
    console.log("Home component unmounted and ngOnDestroy called")
  }
}
