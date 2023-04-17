import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang20app';
  countries:any;
  constructor(public hs:HttpClient){}
  
  getCountries(){
    this.hs.get("https://restcountries.com/v2/all").subscribe((data)=>{
      this.countries=data;
    })
  }

}


// HttpClient