import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username==='Gopi' && password==='123'){
      sessionStorage.setItem("authenticatedUser",username);
      return true;
    }
    return false;

  }
  isUserLoggedin(){
    let authenticatedUser = sessionStorage.getItem("authenticatedUser");
    if(authenticatedUser===null){
      return false;
    }
    return true;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
