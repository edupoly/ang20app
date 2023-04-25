import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  countries:any=[]

  constructor(public http:HttpClient){

  }
  ngOnInit(){
    this.http.get("https://restcountries.com/v3.1/all").subscribe((res)=>{
      this.countries=res;
    })
  }
}
