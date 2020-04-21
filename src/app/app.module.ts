import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductsViewComponent } from './Components/products-view/products-view.component';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
