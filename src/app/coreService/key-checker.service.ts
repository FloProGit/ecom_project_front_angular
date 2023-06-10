import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyCheckerService {

  constructor() {
  }

  check(object: object|object[], arrayKeys: string[]):boolean
  {


    const result = Array.isArray(object);
    let isOk: boolean = true;
    if(result)
    {
      object.forEach((obj)=>{

        if(!this.checkObject(obj,arrayKeys))
        {
          isOk = false;
        }
      })
    }
    else{
      isOk=this.checkObject(object,arrayKeys)
    }
   return isOk
  }
  private checkObject(array: object, arrayKeys: string[]):boolean {
    let AllKeyExist: boolean = true;
    arrayKeys.forEach((key) => {
      if (!(key in array)) {
        if (key.includes('.')) {
          try {
            eval("(" + "array." + key + ")");
          } catch (err) {
            console.error("key => " + key + "  not Found");
            AllKeyExist = false;
          }
        } else {
          AllKeyExist = false;
        }
      }
    })
    return AllKeyExist;
  }
}
