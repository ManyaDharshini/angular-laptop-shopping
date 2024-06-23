import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from './login/authUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCartGaurdGuard implements CanActivate {

  constructor(private authUserService:AuthUserService,private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authUserService.isLoggedIn){
        alert("Please Login");
        this.router.navigate(['/login']);
        return false; 
      }
    return true;
  }
  
}
