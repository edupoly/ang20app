import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  constructor(public ar:ActivatedRoute,public http:HttpClient){}
  country:any={}
  ngOnInit(){
    this.ar.params.subscribe((res:any)=>{
      console.log(res)
      this.http.get("https://restcountries.com/v3.1/alpha/"+res.ccode).subscribe((details:any)=>{
        this.country=details[0]
      })
    })
  }
}
