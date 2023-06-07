import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../coreService/user-service.service";
import {IUser} from "../../coreInterface/IUser";
import {TokenService} from "../../coreService/token.service";
import {AuthService} from "../../coreService/auth.service";


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements AfterViewInit{

  constructor(private userService: UserServiceService,private tokenService:TokenService,private authService:AuthService) {

  }
  user:IUser = {name:'',email:''};
  name = '';
  email = '';
  password = '';
  ngOnInit(){

  }
ngAfterViewInit() {
  this.userService.getUser().then((response)=>{
    const data = response.data[0];
    this.user = {
      name :data.name,
      email :data.email,
    }
    this.name = this.user.name;
    this.email = this.user.email;
  }).catch(console.error)
}

  updateName()
  {
    if(this.name !== this.user.name)
    {
      this.userService.modifyName(this.name).then((response)=>{
      this.tokenService.storeToken({token :response.data})
      }).catch(console.error)
    }
  }
  updateEmail()
  {

    if(this.email !== this.user.email)
    {
      this.userService.modifyEmail(this.email).then((response)=>{
        this.tokenService.storeToken({token :response.data})
      }).catch(console.error)
    }
  }
  updatePassword()
  {
      this.userService.modifyPassword(this.password).then((response)=>{
        this.tokenService.storeToken({token :response.data})
      }).catch(console.error)
  }
  deleteUser()
  {
    this.userService.deleteUser().then((response)=>{
      this.tokenService.clearToken();
    }).catch(console.error)
  }
}
