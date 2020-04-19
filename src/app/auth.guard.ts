import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private routes: Router){

  }
  canActivate(next:ActivatedRouteSnapshot,
    RouterStateSnapshot):boolean{
      console.log(next," authguard next"+"<br>");
      console.log(RouterStateSnapshot," auth RouterStateSnapshot");
    if(localStorage.getItem('uname')!=null){
      console.log("yes");
      return true;

    }
    else{
       this.routes.navigate([`/login`]);
       return false;
    }
  }
  
}
