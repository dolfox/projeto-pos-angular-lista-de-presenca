import { Component, OnInit } from '@angular/core';
import { ListaDePresenca, ListaPresencaService} from '../shared';
import { ListaPresencaDataService } from '../shared';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-presenca-list',
  templateUrl: './lista-de-presenca-list.component.html',
  styleUrls: ['./lista-de-presenca-list.component.css']
})
export class ListaDePresencaListComponent implements OnInit {

  listas: Observable<any>;

  constructor(private router: Router, public afAuth: AngularFireAuth, private listaService: ListaPresencaService, private listaPresencaDataService: ListaPresencaDataService) { }

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

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate([""]);
  }

}
