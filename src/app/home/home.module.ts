import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { CurrentProductsComponent } from './components/current-products/current-products.component';
import {ImagesCarouselComponent} from "./components/images-carousel/images-carousel.component";
import {ImageCarouselDirective} from "../coreDirective/image-carousel.directive";
import {CarouselItemElementDirective} from "../coreDirective/carousel-item-element.directive";
import { CardProductComponent } from './components/card-product/card-product.component';



@NgModule({
  declarations: [
    HomeComponent,
    CurrentProductsComponent,
    ImagesCarouselComponent,
    ImageCarouselDirective,
    CarouselItemElementDirective,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule {



}
