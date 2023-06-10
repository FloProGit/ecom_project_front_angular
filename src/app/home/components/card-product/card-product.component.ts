import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../coreInterface/iproduct";
import {environment} from "../../../Environement/UrlApi";
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit{


@Input() product!:IProduct;
  sizeStringSelected:number = 50;

ngOnInit() {
  this.resizeString(window.innerWidth) ;
}
  imageUrl = environment.imageUrl;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const w = (event.target as Window).innerWidth;
    this.resizeString(w) ;
    console.log(this.sizeStringSelected);
  }
  resizeString(width:number) {

    if (width <= 900) {
      this.sizeStringSelected = 100;
    }
    else if (width > 900 && width <= 1400)
    {
      this.sizeStringSelected = 40;
    }
    else if (width > 1400){
      this.sizeStringSelected = 50;
    }
  }
}
