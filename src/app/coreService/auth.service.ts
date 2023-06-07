import { Injectable } from '@angular/core';
import axios, {AxiosError, AxiosResponse} from "axios";
import {ICredential} from "../coreInterface/ICredential";
import {IToken} from "../coreInterface/IToken";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    axios.defaults.baseURL = 'https://127.0.0.1:8000';
  }

  async login(credential :ICredential) : Promise<AxiosResponse<IToken>>
  {
    const url = '/api/login_check';
    const config = {
      headers:{
        "Content-Type": "application/json",
      }
    };
        return  await axios.post<IToken>(url,credential,config);
  }


  async Register(credential :ICredential) : Promise<AxiosResponse<IToken>>
  {
    const url = '/api/register';
    const config = {
      headers:{"Content-Type": "application/json"}
    };
    return  await axios.post<IToken>(url,credential,config);
  }
}
