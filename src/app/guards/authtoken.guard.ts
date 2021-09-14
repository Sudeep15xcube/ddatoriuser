import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {map, tap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthtokenGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   //access route for only authenticated user 
    return this.authService.userSub.pipe(take(1),map(user=>{
     if (!user){
      return this.router.createUrlTree(['/auth']);
     }
     return true;
    }));
  }
  
}

/*--------------in previous we use to so this-------
  return this.authService.userSub.pipe(map(user=>{
      return user ? true : false;
    }),tap(auth=>{
     if(!auth){
      this.router.navigate(['/auth']);
     }
    })
    );
    -----------------------------------------------*/