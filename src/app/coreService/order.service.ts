import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";
import {CartService} from "./cart.service";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService:CartService,
              private tokenService:TokenService) { }



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
    console.log(data);
    return await axios.post(url,data,config);
  }


}
