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
        'productVariations[0].mediaUrls[0].url_link',
        'ext_id',
        'productVariations[0].quantity',
        'productVariations[0].condition_product.current_condition',
      ]

      const isArray = Array.isArray(array);
      if(!this.keyCkecher.check(array,keyNameToSearch))
      {
        return [];
      }

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
      url_link: obj.productVariations[0].mediaUrls[0].url_link,
      ext_id: obj.ext_id,
      quantity: obj.productVariations[0].quantity,
      current_condition: obj.productVariations[0].condition_product.current_condition,
    }
  }

}
