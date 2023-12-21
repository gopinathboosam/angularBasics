import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class welcomeMessageFromBackend{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  welcomeMessageFromBackend(){
    return this.http.get<welcomeMessageFromBackend>("http://localhost:8080/welcome")
    //console.log("In welcomeMessageFromBackend from WelcomeDataService")
  }

  welcomeMessageFromBackendPathVariable(name){
    return this.http.get<welcomeMessageFromBackend>(`http://localhost:8080/welcome/path-variable/${name}`)
  }
}
