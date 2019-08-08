import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListaDePresenca } from './lista-presenca';
 
@Injectable({
  providedIn: 'root'
})
export class ListaPresencaDataService {
  private listaSource = new BehaviorSubject({ lista: null, key: '' });
  currentLista = this.listaSource.asObservable();
 
  constructor() { }
 
  changeLista(lista: ListaDePresenca, key: string) {
    this.listaSource.next({ lista: lista, key: key });
  }
}