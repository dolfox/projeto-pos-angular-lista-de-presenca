import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDePresencaListComponent } from './lista-de-presenca';

const routes: Routes = [
  {
    path: '',
    component: ListaDePresencaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
