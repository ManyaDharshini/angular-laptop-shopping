import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../login/authUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate, CanActivateChild {
  constructor(private authenticate: AuthUserService, private route:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authenticate.isAdminLoggedIn || localStorage.getItem('isAdminLoggedIn')){
        return true;
      }else{
         this.route.navigateByUrl('/error');
         return false;
      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(childRoute,state);

  }
  
}
