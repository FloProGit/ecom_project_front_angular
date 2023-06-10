import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";
import {CartService} from "./cart.service";
import {TokenService} from "./token.service";
import {environment} from "../Environement/UrlApi";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private cartService:CartService,
              private tokenService:TokenService) {
    axios.defaults.baseURL = environment.SourceUrl;

  }



  async sendOrder( )
  {
    const url = '/api/create-order';
    const cart = this.cartService.getCart();

    console.log(cart);
    const config = {
      headers:{
        "Content-Type": "application/json",
      }
    };
    const data = {
        cart: cart,
        token : this.tokenService.getToken()
    }

    return await axios.post(url,data,config);
  }


}
