import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../coreInterface/iproduct";
import {ProductService} from "../../coreService/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../coreService/cart.service";
import {ProductConverterService} from "../../coreService/converters/product-converter.service";
import {environment} from "../../Environement/UrlApi";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!:number;

  product !: IProduct;
  imageUrl = environment.imageUrl;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService:CartService,
    private converter:ProductConverterService,
  ) {


  }


  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });


     this.productService.getProduct(this.id).then((response)=>
     {
       console.log(response.data[0]);
       let result = this.converter.arrayToIproduct(response.data[0]);

       if(!Array.isArray(result)){
         this.product = result;
       }

     }).catch((err)=>{
       console.log(err)
     });

  }

  buy()
  {
    this.cartService.addToCart(this.product.id);
  }

  removeOne()
  {
    this.cartService.removeOneQuantity(this.product.id);
  }
  remove()
  {
    this.cartService.removeProduct(this.product.id);
  }
}
