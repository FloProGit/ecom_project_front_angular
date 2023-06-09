import {Component, OnInit} from '@angular/core';
import {IProduct} from "../coreInterface/iproduct";
import {ProductService} from "../coreService/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  lastProduct!:IProduct[];
  constructor(private productService:ProductService) {
  }
  ngOnInit() {
    this.productService.getAllProducts().then((response)=>{
      this.lastProduct = response.data;
    }).catch((err)=>{
      console.log(err)
    })
  }

}
