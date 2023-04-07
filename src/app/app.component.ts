import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang20app';
  mynumber=19282;
  students = [
    {
      name:'prakruthi',
      gender:'female',
      age:34
    },
    {
      name:'jayaram',
      gender:'male',
      age:54
    },
    {
      name:'hima',
      gender:'female',
      age:14
    },
    {
      name:'gauri',
      gender:'female',
      age:24
    },
    {
      name:'naman',
      gender:'male',
      age:22
    },
]
}
