import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countries2',
  templateUrl: './countries2.component.html',
  styleUrls: ['./countries2.component.css']
})
export class Countries2Component {
  countries:any=[]

  constructor(public http:HttpClient){

  }
  ngOnInit(){
    this.http.get("https://restcountries.com/v3.1/all").subscribe((res)=>{
      this.countries=res;
    })
  }
  abc(c:any){
    return {details:JSON.stringify(c)}
  }
}
