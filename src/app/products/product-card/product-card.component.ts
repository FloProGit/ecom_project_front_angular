import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../coreInterface/iproduct";
import {CartService} from "../../coreService/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product !: IProduct;
  image : string = "";

  constructor(private cartService:CartService) {
  }
  ngOnInit() {
    this.image ="https://127.0.0.1:8000/download/images/"+this.product.url_link
  }

  addItem(id:number){
    this.cartService.addToCart(id);
  }
}
