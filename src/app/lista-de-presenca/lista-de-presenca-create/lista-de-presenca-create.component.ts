import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaDePresenca} from '../shared';
import { ListaPresencaDataService, ListaPresencaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-lista-de-presenca-create',
  templateUrl: './lista-de-presenca-create.component.html',
  styleUrls: ['./lista-de-presenca-create.component.css']
})
export class ListaDePresencaCreateComponent implements OnInit {

  @ViewChild('formListaPresenca', {static: true}) formListaPresenca: NgForm;

  lista: ListaDePresenca;
  key: string = '';

  constructor(public afAuth: AngularFireAuth, private listaPresencaDataService: ListaPresencaDataService, private listaPresencaService: ListaPresencaService, private router: Router) { }

  ngOnInit() {
    this.lista = new ListaDePresenca();
  }

  onSubmit() {
    if (this.key) {
      this.listaPresencaService.update(this.lista, this.key);
    } else {
      if (this.formListaPresenca.form.valid) {
        this.listaPresencaService.create(this.lista);
        this.router.navigate(["/listapresenca"]);
      }
    }
    this.lista = new ListaDePresenca();
  }

}
