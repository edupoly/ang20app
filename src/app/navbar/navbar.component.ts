import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public aS:AuthService){}
  loginStatus:boolean=false;
  ngOnInit(){
    this.aS.loginEvent.subscribe((res)=>{
      this.loginStatus=res
    })
  }
  doLogin(){
    this.aS.login();
  }
  doLogout(){
    this.aS.logout()
  }
}
