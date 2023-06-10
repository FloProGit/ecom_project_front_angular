import { Injectable } from '@angular/core';
import {IToken} from "../coreInterface/IToken";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  storeToken(token_access : IToken)
  {
      localStorage.setItem('token',token_access.token)
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

  isLogged(): boolean{
    return !! localStorage.getItem('token');
  }


  clearToken():void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}
