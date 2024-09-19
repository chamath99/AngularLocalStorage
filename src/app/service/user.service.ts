import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserAuthService} from "./user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL= "http://localhost:8083";

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private httpClient:HttpClient,
              private userAuthService:UserAuthService) { }

  public login(loginData:any){
    return this.httpClient.post(this.BASE_URL+"/authentication",loginData,{headers:this.requestHeader})
  }

  //role ekata role match blne
  public roleEqual(allowRoles):boolean{
    let isMatch = false;
    const userRoles:any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles){

    }
  }
}
