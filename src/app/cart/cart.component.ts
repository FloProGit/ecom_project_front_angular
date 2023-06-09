import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductService} from "../coreService/product.service";
import {CartService} from "../coreService/cart.service";
import {IProductDetail} from "../coreInterface/IProductDetail";
import {ProductConverterService} from "../coreService/converters/product-converter.service";
import {IProduct} from "../coreInterface/iproduct";
import {OrderService} from "../coreService/order.service";

type CartProduct={
  product : IProduct;
  quantity : number
}

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

  CartProducts : CartProduct[] = [];
  totalPriceCart :number= 0;
  ngOnInit() {
    const productIds :string[] =this.cartService.getCartItemID();
    let test :object = {};
    this.productService.getProductsByArrayID(productIds).then((response)=>{
      console.log(response.data);

      let result = this.converter.arrayToIproduct(response.data);
      console.log(result);
      if(Array.isArray(result))
      {
        result.forEach((newProduct:IProduct)=>{
          this.CartProducts.push({product :newProduct ,quantity:this.cartService.getQuantityByID(newProduct.id)})
        })
        this.updateTotalPrice();
      }
      else {
        this.CartProducts =[{product :result ,quantity:this.cartService.getQuantityByID(result.id) }]
      }
    }).catch(console.error);
  }
  ngAfterViewInit() {

  }

  addItem(id:number,idArray:number){
    this.cartService.addToCart(id);
    const qty:number =  this.cartService.getQuantityByID(id);
    this.CartProducts[idArray].quantity = qty;
    this.updateTotalPrice();
  }
  removeOne(id:number,idArray:number){
    this.cartService.removeOneQuantity(id);
    const qty:number =  this.cartService.getQuantityByID(id);
    this.CartProducts[idArray].quantity = qty;
    this.updateTotalPrice();
    if(qty <= 0 )
    {
     this.deleteProduct(id)
    }
  }
  deleteProduct(id:number)
  {
    this.cartService.removeProduct(id);
    this.CartProducts = this.CartProducts.filter((obj)=>
    {
      return obj.product.id != id;
    })
  }
  updateTotalPrice()
  {
    this.totalPriceCart =0;
      this.CartProducts.forEach((Cartproduct)=>{
        this.totalPriceCart += Cartproduct.product.price_tax_exclude * Cartproduct.quantity;
    })


  }
  clearCart()
  {
    this.cartService.deleteCart();
    this.CartProducts = [];
  }

  command()
  {
    this.orderService.sendOrder().then((response)=>{
      console.log(response);
    }).catch(console.error);

  }
}
