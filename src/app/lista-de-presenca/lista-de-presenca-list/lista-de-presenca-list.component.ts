import { Component, OnInit } from '@angular/core';
import { ListaDePresenca, ListaPresencaService} from '../shered';
import { ListaPresencaDataService } from '../shered';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-de-presenca-list',
  templateUrl: './lista-de-presenca-list.component.html',
  styleUrls: ['./lista-de-presenca-list.component.css']
})
export class ListaDePresencaListComponent implements OnInit {

  listas: Observable<any>;

  constructor(private listaService: ListaPresencaService, private listaPresencaDataService: ListaPresencaDataService) { }

  ngOnInit() {
    this.listas = this.listaService.listAll();
    //console.log(this.listas)
  }

  delete(key: string) {
    this.listaService.remove(key);
  }

  edit(listaPresenca: ListaDePresenca, key: string) {
    this.listaPresencaDataService.changeLista(listaPresenca, key);
  }

}
