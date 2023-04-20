import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  constructor(){
    console.log("XYZ component constructor called")
  }
  ngOnChange(){
    console.log("XYZ component ngOnInit called")
  }
  ngOnInit(){
    console.log("XYZ component ngOnInit called")
  }
  ngDoCheck(){
    console.log("XYZ component ngDoCheck called")
  }
  ngOnDestroy(){
    console.log("XYZ component unmounted and ngOnDestroy called")
  }
}
