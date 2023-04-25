import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-studentformvalidation',
  templateUrl: './studentformvalidation.component.html',
  styleUrls: ['./studentformvalidation.component.css']
})
export class StudentformvalidationComponent {
  studentForm = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl('',Validators.required),
    age:new FormControl(0)
  })
  addStudent(){
    console.log(this.studentForm)
  }
}
