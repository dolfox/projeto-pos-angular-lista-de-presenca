import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaDePresenca, ListaPresencaService } from '../shered';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-de-presenca-edit',
  templateUrl: './lista-de-presenca-edit.component.html',
  styleUrls: ['./lista-de-presenca-edit.component.css']
})
export class ListaDePresencaEditComponent implements OnInit {

  listaPresenca: Observable<any>;
  teste: string = 'teste string';

  constructor(private route: ActivatedRoute, private listaPresencaService: ListaPresencaService) { }

  ngOnInit() {
    let key = this.route.snapshot.params['key'];
    this.listaPresenca = this.listaPresencaService.listAll();
    //this.listaPresenca = this.listaPresencaService.findById(key);
    console.log(this.listaPresenca);
  }

}
