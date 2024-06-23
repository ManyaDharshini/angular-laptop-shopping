import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateCheckoutGuard implements CanActivate {

  constructor(private cartService: CartService,private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.cartService.getCartItems().pipe(
        map(items => {
          if (items && items.length > 0) {
            return true;
          } else {
            this.router.navigateByUrl('/error');
            return false;
          }
        })
      );
    
  }
  
}
