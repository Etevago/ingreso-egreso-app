import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as: AuthService,private router:Router) {

  }
  canActivate(): Observable<boolean> {
    return this.as.isAuth().pipe(
      tap(estado=>{
        if (!estado){
          this.router.navigate(["login"])
        }
      })
    )
  }

}
