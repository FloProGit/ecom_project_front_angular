import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import { CurrentProductsComponent } from './components/current-products/current-products.component';
import {ImagesCarouselComponent} from "../coreComponents/images-carousel/images-carousel.component";



@NgModule({
  declarations: [
    HomeComponent,
    CurrentProductsComponent,
    ImagesCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
