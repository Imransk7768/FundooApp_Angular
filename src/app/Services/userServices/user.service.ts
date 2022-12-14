import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any; 

  constructor(private httpservice : HttpService) { 
    this.token= localStorage.getItem("token")
  }

  Login(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpservice.postService('/User/Login',reqdata,false,header)
  }
  Register(reqdata:any){
    console.log(reqdata);

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpservice.postService('/User/Register',reqdata,false,header);
  }

  ForgetPassword(reqdata:any){
    console.log(reqdata);

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpservice.postService('/User/ForgetPassword?email='+(reqdata.email),reqdata,false,header);
  }
 Resetpassword(reqdata:any, token:any){
  console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpservice.putService(`https://localhost:44393/api/User/ResetPassword?newPassword=${reqdata.password}&confirmPassword=${reqdata.confirmPassword}`,{},true,header)
  }
}