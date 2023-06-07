import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { CurrentProductsComponent } from './components/current-products/current-products.component';
import {ImagesCarouselComponent} from "./components/images-carousel/images-carousel.component";
import {ImageCarouselDirective} from "../coreDirective/image-carousel.directive";
import {CarouselItemElementDirective} from "../coreDirective/carousel-item-element.directive";



@NgModule({
  declarations: [
    HomeComponent,
    CurrentProductsComponent,
    ImagesCarouselComponent,
    ImageCarouselDirective,
    CarouselItemElementDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
