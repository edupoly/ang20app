import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcdComponent } from './abcd/abcd.component';
import { HomeComponent } from './home/home.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {
    path:'abcd',
    component:AbcdComponent
  },
  {
    path:"xyz",
    component:XyzComponent
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
