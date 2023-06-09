import { Injectable } from '@angular/core';
import {KeyCheckerService} from "../key-checker.service";

import {IProduct} from "../../coreInterface/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductConverterService {

  constructor(private keyCkecher: KeyCheckerService){ }


  arrayToIproduct(array : object| object[]) : IProduct| IProduct[]
  {
      const keyNameToSearch = [
        "id",
        'name',
        'ext_reference',
        'mediaUrls[0].url_link',
        'ext_id',
        'quantity',
        'condition_product.current_condition',
        'price_tax_exclude',
        'product.description'
      ]

      const isArray = Array.isArray(array);

      if(!this.keyCkecher.check(array,keyNameToSearch))
      {
        return [];
      }
    console.log(isArray);

      if(isArray)
      {
        const data :IProduct[] = array.map((obj)=>{

          return this.convertObjectToIProduct(obj);
        });
        return  data;
      }
      else{
        const data:any = array
        return this.convertObjectToIProduct(data);
      }
  }

  private convertObjectToIProduct(obj:any):IProduct
  {
    return {
      id: obj.id,
      name: obj.name,
      ext_reference: obj.ext_reference,
      url_link: obj.mediaUrls[0].url_link,
      ext_id: obj.ext_id,
      quantity: obj.quantity,
      current_condition: obj.condition_product.current_condition,
      price_tax_exclude : obj.price_tax_exclude,
      description : obj.product.description,
    }
  }

}
