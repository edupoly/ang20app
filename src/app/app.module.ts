import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcdComponent } from './abcd/abcd.component';
import { XyzComponent } from './xyz/xyz.component';
import { HomeComponent } from './home/home.component';
import { FullNameComponent } from './full-name/full-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcdComponent,
    XyzComponent,
    HomeComponent,
    FullNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
