import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcdComponent } from './abcd/abcd.component';
import { XyzComponent } from './xyz/xyz.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule} from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { Countries2Component } from './countries2/countries2.component';
import { CountryDetails2Component } from './country-details2/country-details2.component'
@NgModule({
  declarations: [
    AppComponent,
    AbcdComponent,
    XyzComponent,
    HomeComponent,
    CountriesComponent,
    CountryDetailsComponent,
    Countries2Component,
    CountryDetails2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
