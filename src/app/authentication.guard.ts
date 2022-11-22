import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AUthguardService } from './Services/AuthGuard/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguardService : AUthguardService, private router:Router) { }
  canActivate(): boolean{
    if(!this.authguardService.gettoken()){
      this.router.navigateByUrl('/login');
    }
    return this.authguardService.gettoken();
  }
}

