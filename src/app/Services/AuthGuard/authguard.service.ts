import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AUthguardService {
  //token: any;

  constructor() { }
  gettoken() {
    return !!localStorage.getItem("token");
  } 
}
