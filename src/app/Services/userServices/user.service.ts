import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice : HttpService) { }

  Login(reqdata:any){
    //console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpservice.postService('/User/Login',reqdata,false,header)
  }
  Register(reqdata:any){

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpservice.postService('/User/Register',reqdata,false,header);
  }
}