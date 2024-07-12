import { Component } from '@angular/core';
import { Celular } from "./Celular";
import {CarritoService} from "../carrito.service";
import {CelularesDataService} from "../celulares-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-celus',
  templateUrl: './lista-celus.component.html',
  styleUrls: ['./lista-celus.component.scss']
})
export class ListaCelusComponent {
  celulares: Celular[] = []
  filteredCelulares: Celular[] = [];
  idMarca: number | null = null;
  constructor(private Carrito:CarritoService, private dataService:CelularesDataService,private route: ActivatedRoute) {

    console.log( this.dataService.getAll())

  }
  ngOnInit(): void {

      // Obtener todos los celulares del servicio
      this.dataService.getAll().subscribe(celulares => {
        this.celulares = celulares;

        // Suscribirse a los cambios en el parámetro de ruta
        this.route.paramMap.subscribe(params => {
          const idMarcaParam = params.get('idMarca');
          this.idMarca = idMarcaParam ? Number(idMarcaParam) : null; // Convertir a número o null si no hay idMarca

          // Filtrar celulares según el idMarca actual
          if (this.idMarca !== null && this.idMarca !== 0) {
            this.filteredCelulares = this.filterCelularesByMarca(this.idMarca);
          } else {
            this.filteredCelulares = this.celulares; // Mostrar todos si idMarca es null o 0
          }
        });
      });


  }
  filterCelularesByMarca(idMarca: number | null): Celular[] {
    if(idMarca!=0){
      return this.celulares.filter(c => c.idMarca == idMarca);
    }else{
      return this.celulares
    }


  }
  addToCarrito(c : Celular){
    this.Carrito.addToCarrito(c);

  }

}
