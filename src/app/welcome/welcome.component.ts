import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome";
  name = ''
  messageFromBackend: string
  errorFromBackend:string
  constructor(private route: ActivatedRoute, private welcomeSer: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    
  }

  getWelcomeMessage(){
    //connectService to connect to Backend
    this.welcomeSer.welcomeMessageFromBackendPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleError(error)
      //error => console.log(error)
    );
  }

  handleSuccessResponse(response){

    this.messageFromBackend = response.message;
  }

  handleError(err){

    this.errorFromBackend = err.error.message;
  }

}




