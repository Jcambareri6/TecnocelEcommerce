import { Injectable } from '@angular/core';
import {Celular} from "./lista-celus/Celular";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private  _Cartlist : Celular[] = [];
  private _size : number = this._Cartlist.length;
  Cartlist : BehaviorSubject<Celular[]> = new BehaviorSubject(this._Cartlist);
  size: BehaviorSubject<number> = new BehaviorSubject<number>(this._Cartlist.length);

  addToCarrito(celular: Celular,){
    let item:Celular|undefined = this._Cartlist.find(v1 => v1.nombre === celular.nombre);
    if(!item){
      this._Cartlist.push({...  celular});
      this.Cartlist.next(this._Cartlist)
      this.size.next(this._Cartlist.length);
    }

  }
  deleteToCarrito(Nombre:String){
    let index  = this._Cartlist.findIndex(v1 => v1.nombre === Nombre);
    if(index!=-1){
      this._Cartlist.splice(index,1);
      console.log("elimine")
      this.Cartlist.next(this._Cartlist)
      this.size.next(this._Cartlist.length);
    }
}


}
