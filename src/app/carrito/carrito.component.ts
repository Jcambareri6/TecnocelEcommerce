import { Component } from '@angular/core';
import {Celular} from "../lista-celus/Celular";
import {CarritoService} from "../carrito.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  isCarritoVisible: boolean = false;
  CartList:Celular[] = [];
  constructor(private Carrito:CarritoService ) {
    Carrito.Cartlist.subscribe((c=>this.CartList =c));

  }

  toggleCarrito(event: Event) {
   event.preventDefault();
    this.isCarritoVisible = !this.isCarritoVisible;


  }
  closeCarrito(){
    this.isCarritoVisible=false;
  }
  deleteToCarrito(Nombre:string){
    this.Carrito.deleteToCarrito(Nombre);

  }

}
