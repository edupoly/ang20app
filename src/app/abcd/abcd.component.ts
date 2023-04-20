import { Component } from '@angular/core';

@Component({
  selector: 'app-abcd',
  templateUrl: './abcd.component.html',
  styleUrls: ['./abcd.component.css']
})
export class AbcdComponent {
  constructor(){
    console.log("Abcd component constructor called")
  }
  ngOnChange(){
    console.log("Abcd component ngOnChanges called")
  }
  ngOnInit(){
    console.log("Abcd component ngOnInit called")
  }
  ngDoCheck(){
    console.log("Abcd component ngDoCheck called")
  }
  ngOnDestroy(){
    console.log("Abcd component unmounted and ngOnDestroy called")
  }
}
