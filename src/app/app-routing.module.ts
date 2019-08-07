import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDePresencaListComponent, ListaDePresencaEditComponent } from './lista-de-presenca';

const routes: Routes = [
  {
    path: '',
    component: ListaDePresencaListComponent
  },
  {
    path: 'listapresenca/edit',
    component: ListaDePresencaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
