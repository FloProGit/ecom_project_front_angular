import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {AuthGuard} from "./coreGuard/Auth.guard";

const routes: Routes = [
  {path: 'homepage' ,component: HomeComponent},
  {path: 'products' ,component: ProductsComponent , canActivate:[AuthGuard]},
  {path: '' ,redirectTo :'homepage' ,pathMatch:'full'},
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
