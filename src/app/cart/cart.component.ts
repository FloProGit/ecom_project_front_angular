import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductService} from "../coreService/product.service";
import {CartService} from "../coreService/cart.service";
import {IProductDetail} from "../coreInterface/IProductDetail";
import {ProductConverterService} from "../coreService/converters/product-converter.service";
import {IProduct} from "../coreInterface/iproduct";
import {OrderService} from "../coreService/order.service";
import {TokenService} from "../coreService/token.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit,AfterViewInit{

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private converter:ProductConverterService,
    private ref: ChangeDetectorRef,
    private orderService:OrderService,

    ) {
  }

  products !: IProduct[];

  ngOnInit() {
    const productIds :string[] =this.cartService.getCartItemID();
    let test :object = {};
    this.productService.getProductsByArrayID(productIds).then((response)=>{
      let result = this.converter.arrayToIproduct(response.data);
      if(Array.isArray(result))
      {
        this.products = result
      }
      else {
        this.products =[result]
      }
      console.log(result)
    }).catch(console.error);
  }
  ngAfterViewInit() {

  }

  addItem(id:number){
    this.cartService.addToCart(id);

  }
  removeOne(id:number){
    this.cartService.removeOneQuantity(id);
    const qty:number =  this.cartService.getQuantityByID(id);
    if(qty <= 0 )
    {
     this.deleteProduct(id)
    }
  }
  deleteProduct(id:number)
  {
    this.cartService.removeProduct(id);
    this.products = this.products.filter((obj)=>
    {
      return obj.id != id;
    })
  }
  clearCart()
  {
    this.cartService.deleteCart();
    this.products = [];
  }

  command()
  {
    this.orderService.sendOrder().then((response)=>{
      console.log(response);
    }).catch(console.error);

  }
}
