import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details2',
  templateUrl: './country-details2.component.html',
  styleUrls: ['./country-details2.component.css']
})
export class CountryDetails2Component {
  constructor( public ar:ActivatedRoute){
  }
  ngOnInit(){
    this.ar.queryParams.subscribe((details)=>{
      console.log(details)
    })

  }
}
