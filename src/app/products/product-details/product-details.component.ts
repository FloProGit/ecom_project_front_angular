import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../coreInterface/iproduct";
import {ProductService} from "../../coreService/product.service";
import {ActivatedRoute} from "@angular/router";
import {IProductDetail} from "../../coreInterface/IProductDetail";
import {CartService} from "../../coreService/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!:number;

  product !: IProductDetail;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService:CartService) {


  }


  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    console.log(this.id);

     this.productService.getProduct(this.id).then((response)=>
     {
       const resProduct = response.data[0];
       this.product = {
         id:resProduct.id,
         name: resProduct.name,
         url_link: resProduct.productVariations[0].mediaUrls[0].url_link,
         quantity: resProduct.quantity,
         description : resProduct.description
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
