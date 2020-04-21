import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductsViewComponent } from './Components/products-view/products-view.component';
import {ButtonModule} from 'primeng';
import {DialogModule} from 'primeng';
import {InputTextModule} from 'primeng';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
