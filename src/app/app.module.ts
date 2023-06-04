import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeModule} from "./home/home.module";
import {ProductsModule} from "./products/products.module";
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ButtonhoverComponent } from './navbar/Components/buttonhover/buttonhover.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ButtonhoverComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ProductsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
