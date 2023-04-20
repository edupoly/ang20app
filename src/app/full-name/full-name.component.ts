import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css']
})
export class FullNameComponent {
  @Input() x=100;
  ngOnChanges(){
    console.log("Full Name ngOnChange called")
  }
  ngAfterContentInit(){
    console.log("fullname content init called")
  }
  ngAfterContentChecked(){
    console.log("fullname content checked called")
  }
}
