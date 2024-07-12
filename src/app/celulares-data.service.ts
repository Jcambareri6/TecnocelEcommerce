import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Celular} from "./lista-celus/Celular";
 const URL = 'https://66912d7726c2a69f6e8ec5d3.mockapi.io/Celular'
@Injectable({
  providedIn: 'root'
})
export class CelularesDataService {

  constructor(private http:HttpClient) {
  }
  public getAll(){
    return this.http.get<Celular[]>(URL);
  }
}
