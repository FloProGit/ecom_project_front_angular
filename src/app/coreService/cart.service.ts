import { Injectable } from '@angular/core';
import {parseJson} from "@angular/cli/src/utilities/json-file";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(id:number)
  {
    // ex: cart  {12:5,6:1}
    const stringCart : string = this.getCart();
    let JsonCart : any = '';
    if('' === stringCart)
    {
      JsonCart = {[id]:1};
      this.storeCart(JsonCart);
    }
    else
    {
      JsonCart = JSON.parse(stringCart);
      if(JsonCart[id] === undefined) {
        Object.assign(JsonCart, {[id]:1})
      }
      else{
        JsonCart[id] = JsonCart[id]+1;
      }
      this.storeCart(JsonCart);
    }
  }

 removeOneQuantity(id:number):void
 {
   const stringCart : string = this.getCart();

   let JsonCart = JSON.parse(stringCart);
   if(JsonCart[id] === undefined) {
     return ;
   }
   else{
     JsonCart[id] = JsonCart[id]-1;
     this.storeCart(JsonCart);
   }
 }
 removeProduct(id:number):void
 {
   const stringCart : string = this.getCart();
   let JsonCart = JSON.parse(stringCart);
   if(JsonCart[id] === undefined) {
     return ;
   }
   else{
     delete JsonCart[id];
     this.storeCart(JsonCart);
   }
 }

  getCart():string
 {
   return  localStorage.getItem('cart') ?? '';
 }
  private storeCart(cartObject :object ):void
  {
    localStorage.setItem('cart',JSON.stringify(cartObject));
  }
  getCartItemID():string[]
  {
    const result :number[] = [];
    const cart = this.getCart();

    const carArray = JSON.parse(cart)
    const productIds : string[] =  Object.keys(carArray);

    return productIds
  }

  deleteCart():void
  {
    localStorage.removeItem('cart');
  }
  getQuantityByID(id:number):number
  {
    const cart = this.getCart();
    const carArray = JSON.parse(cart)
    return carArray[id]
  }
}
