import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDePresencaListComponent, ListaDePresencaEditComponent, ListaDePresencaCreateComponent } from './lista-de-presenca';

const routes: Routes = [
  {
    path: '',
    component: ListaDePresencaListComponent
  },
  {
    path: 'listapresenca',
    component: ListaDePresencaListComponent
  },
  {
    path: 'listapresenca/edit/:key',
    component: ListaDePresencaEditComponent
  },
  {
    path: 'listapresenca/create',
    component: ListaDePresencaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
