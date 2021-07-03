import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private axis:AuthService,private router:Router) {
  }

  canActivate(){
  if(!localStorage.getItem('token')){
    this.router.navigate(['/login'])
    return false;
  }
    return true;

}

}
