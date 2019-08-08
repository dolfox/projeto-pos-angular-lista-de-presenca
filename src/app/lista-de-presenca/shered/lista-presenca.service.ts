import { Injectable } from '@angular/core';

import { ListaDePresenca } from './lista-presenca';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListaPresencaService {

  constructor(private db: AngularFireDatabase, private router: Router) { }

  listAll(){
    return this.db.list('lista-presenca')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  create(listaPresenca: ListaDePresenca){
    this.db.list('lista-presenca').push(listaPresenca)
    .then((result: any) => {
      console.log(result.key);
    });
    this.router.navigate(["/listapresenca"]);
  }

  update(listaPresenca: ListaDePresenca, id: string){
    this.db.list('lista-presenca').update(id, listaPresenca)
    .catch((error: any) => {
      console.log(error);
    });
  }

  remove(key: string) {
    this.db.object(`lista-presenca/${key}`).remove();
  }

  findById(){

  }

  changeStatus(){

  }
}
