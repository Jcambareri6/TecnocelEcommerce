import { Component } from '@angular/core';
import {CarritoService} from "../carrito.service";

@Component({
  selector: 'app-btn-carrito',
  templateUrl: './btn-carrito.component.html',
  styleUrl: './btn-carrito.component.scss'
})
export class BtnCarritoComponent {
  protected readonly event = event;
  itemCount: number = 0;
  constructor(private cart: CarritoService) {

    this.cart.size.subscribe(size => {
      console.log(this.itemCount)
      this.itemCount = size;
    })
  }
}
