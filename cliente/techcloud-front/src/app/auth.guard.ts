import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private loginService: LoginService, private router: Router){  }

  canActivate(): boolean{
    if(this.loginService.loggedIn()){
      return true;

    }else{
      this.router.navigate(['/login'])
      return false

    }
  }
}
export class loginGuard implements CanActivate {
  
  constructor( private loginService: LoginService, private router: Router){  }

  canActivate(): boolean{
    if(this.loginService.loggedIn()){
      this.router.navigate(['/login'])

      return true;

    }else{
      return false

    }
  }
}
