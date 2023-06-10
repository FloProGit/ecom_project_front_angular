import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart.component";
import {AuthGuard} from "../coreGuard/Auth.guard";


const routes: Routes = [
  { path: 'cart', component: CartComponent,canActivate: [
      AuthGuard
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {

}
