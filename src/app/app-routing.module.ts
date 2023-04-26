import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcdComponent } from './abcd/abcd.component';
import { Check1Guard } from './check1.guard';
import { CountriesComponent } from './countries/countries.component';
import { Countries2Component } from './countries2/countries2.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryDetails2Component } from './country-details2/country-details2.component';
import { HomeComponent } from './home/home.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {
    path:'abcd',
    component:AbcdComponent
  },
  {
    path:"xyz",
    component:XyzComponent,
    canActivate:[Check1Guard]
  },
  {
    path:"countries",
    component:CountriesComponent,
    children:[
      {
        path:"countryDetails/:ccode",
        component:CountryDetailsComponent
      }
    ]
  },
  {
    path:"countryDetails/:ccode",
    component:CountryDetailsComponent
  },
  {
    path:"countries2",
    component:Countries2Component
  },
  {
    path:"countrydetails2",
    component:CountryDetails2Component
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
