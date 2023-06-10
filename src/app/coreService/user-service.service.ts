import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";
import {IToken} from "../coreInterface/IToken";
import {TokenService} from "./token.service";
import {environment} from "../Environement/UrlApi";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private tokenService:TokenService) {
    axios.defaults.baseURL = environment.SourceUrl;

  }

  async getUser(): Promise<AxiosResponse>
  {
    const url = '/api/get-user';
    const data = {
      token : this.tokenService.getToken()
    }
    const config = {
      headers:{"Content-Type": "application/json"}
    };
    return  await axios.post<IToken>(url,data,config);
  }
  async modifyEmail(email:string): Promise<AxiosResponse>
  {
    const url = '/api/update-email-user';

    const data = {
      token : this.tokenService.getToken(),
      email : email
    }
    const config = {
      headers:{"Content-Type": "application/json"}
    };
    return  await axios.put<IToken>(url,data,config);
  }
  async modifyPassword(password:string): Promise<AxiosResponse>
  {
    const url = '/api/update-password-user';
    const data = {
      token : this.tokenService.getToken(),
      password : password
    }
    const config = {
      headers:{"Content-Type": "application/json"}
    };
    return  await axios.put<IToken>(url,data,config);
  }
  async modifyName(name:string): Promise<AxiosResponse>
  {
    const url = '/api/update-name-user';
    const data = {
      token : this.tokenService.getToken(),
      name : name
    }
    const config = {
      headers:{"Content-Type": "application/json"}
    };
    return  await axios.put<IToken>(url,data,config);
  }
  async deleteUser()
  {
    const url = '/api/delete-user';

    const config = {
      headers:{"Content-Type": "application/json"},
      params: {
        products: this.tokenService.getToken()
      }
    };
    return  await axios.delete<IToken>(url,config);
  }


}
