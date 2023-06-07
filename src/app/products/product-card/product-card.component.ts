import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../coreInterface/iproduct";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product !: IProduct;
  image : string = "";

  ngOnInit() {
    this.image ="https://127.0.0.1:8000/download/images/"+this.product.url_link
  }


}
