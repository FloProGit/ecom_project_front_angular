import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/components/home.component";
import {ProductsComponent} from "./products/components/products.component";

const routes: Routes = [
  {path: 'homepage' ,component: HomeComponent},
  {path: 'products' ,component: ProductsComponent},
  {path: '' ,redirectTo :'homepage' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
