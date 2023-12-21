import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Gopi'
  password = '123'
  invalidUserFlag = false;
  invalidLoginMessage = "Invalid Username or password. Please check";

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  callLogin(){
    // console.log("Hey" + this.username);
    // console.log("Password "+ this.password)
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidUserFlag = false;
      
    } else {
      this.invalidUserFlag= true;
    }
    }

}
