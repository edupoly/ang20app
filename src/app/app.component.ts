import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 'Edupoly'
  title = 'ang20app';
  abc(){
    alert("HI")
  }
  
}
