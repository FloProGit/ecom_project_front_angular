import { Component } from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "../../coreService/auth.service";
import {ICredential} from "../../coreInterface/ICredential";
import {TokenService} from "../../coreService/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
/*TODO
  need use services,guard,interface,formAngular,Axios
  - create login form
  - use service to store token
  - make register form
  - logout function
  https://127.0.0.1:8000
https://127.0.0.1:8000/api/login_check
 */

constructor(private auth:AuthService,private tokenService: TokenService,private router:Router) {
}

  form :ICredential ={
    username: '',
    password: ''
  }
  onSubmit():void
  {
    console.log(this.form)
      this.auth.login(this.form)
        .then((response)=>{
          this.tokenService.storeToken(response.data)
          this.router.navigate(['/'])
        }).catch((err)=>{
          console.log(err.message);
      })
  }

}
