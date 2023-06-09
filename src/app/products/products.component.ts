import {AfterViewInit, Component} from '@angular/core';
import {ProductService} from "../coreService/product.service";
import {IProduct} from "../coreInterface/iproduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit{

  listOfProducts : IProduct[] = [];
  constructor(private productService:ProductService) {

  }

  ngAfterViewInit() {
     this.productService.getAllProducts().then((response)=>{
       console.log(response.data)
       this.listOfProducts = response.data;
    }).catch((err)=>{
      console.log(err)
    })
  }
}
