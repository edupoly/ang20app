import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn=false;
  loginEvent=new EventEmitter()
  login(){
    this.loginEvent.emit(true)
  }
  logout(){
    this.loginEvent.emit(false)
  }
}
