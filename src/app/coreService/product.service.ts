import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";
import {IToken} from "../coreInterface/IToken";
import {IProduct} from "../coreInterface/iproduct";
import {ICart} from "../coreInterface/icart";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
    axios.defaults.baseURL = 'https://127.0.0.1:8000';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  }

  async getAllProducts() : Promise<AxiosResponse>
  {
    const url = '/api/all-products';

    return await axios.get<IProduct[]>(url);
  }


  async getProduct(id:number) : Promise<AxiosResponse>
  {
    const url = '/api/product/'+id;



    return await axios.get(url);
  }

   async getProductsByArrayID(ids:string[]) : Promise<AxiosResponse>
  {
    const url = '/api/products';

    const config = {
      params: {
        products: ids
      }
    }
    return await axios.get(url,config);
  }
}
