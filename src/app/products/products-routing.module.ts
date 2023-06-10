import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";


const routes: Routes = [
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {

}
