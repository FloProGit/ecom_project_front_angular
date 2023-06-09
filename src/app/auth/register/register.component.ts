import { Component } from '@angular/core';
import {TokenService} from "../../coreService/token.service";
import {AuthService} from "../../coreService/auth.service";
import {IRegisterCredential} from "../../coreInterface/IRegisterCredential";
import {ICredential} from "../../coreInterface/ICredential";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form :IRegisterCredential ={
    username: '',
    password: '',
    name:''
  }
  constructor(private tokenService: TokenService,private auth:AuthService,private router: Router) {

  }
  onSubmit():void
  {
    console.log(this.form)
    this.auth.Register(this.form)
      .then((response)=>{
        const newUser: ICredential = {
          username: this.form.username,
          password: this.form.password
        }
        this.auth.login(newUser).then((response)=>{
          console.log(response);
          this.tokenService.storeToken(response.data)
          this.router.navigate(['/'])
        })
      }).catch((err)=>{
      console.log(err.message);
    })
  }
}
