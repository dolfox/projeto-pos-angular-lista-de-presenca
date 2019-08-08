import { Component, OnInit } from '@angular/core';
import { ListaDePresenca} from '../shered';
import { ListaPresencaDataService, ListaPresencaService } from '../shered';

@Component({
  selector: 'app-lista-de-presenca-create',
  templateUrl: './lista-de-presenca-create.component.html',
  styleUrls: ['./lista-de-presenca-create.component.css']
})
export class ListaDePresencaCreateComponent implements OnInit {

  lista: ListaDePresenca;
  key: string = '';

  constructor(private listaPresencaDataService: ListaPresencaDataService, private listaPresencaService: ListaPresencaService) { }

  ngOnInit() {
    this.lista = new ListaDePresenca();
    // this.listaPresencaDataService.currentLista.subscribe(data => {
    //   if (data.lista && data.key) {
    //     this.lista = new ListaDePresenca();
    //     this.lista.nome = data.lista.nome;
    //     this.lista.status = false;
    //     this.key = data.key;
    //   }
    // })
  }

  onSubmit() {
    if (this.key) {
      this.listaPresencaService.update(this.lista, this.key);
    } else {
      this.listaPresencaService.create(this.lista);
    }
    this.lista = new ListaDePresenca();
  }

}
