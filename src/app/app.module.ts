import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCelusComponent } from './lista-celus/lista-celus.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlyerComponent } from './flyer/flyer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { BtnCarritoComponent } from './btn-carrito/btn-carrito.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListaCelusComponent,
    NavBarComponent,
    FlyerComponent,
    ContactoComponent,
    CarritoComponent,

    BtnCarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
