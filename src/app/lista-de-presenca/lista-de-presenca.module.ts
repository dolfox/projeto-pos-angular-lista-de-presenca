import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDePresencaListComponent } from './lista-de-presenca-list/lista-de-presenca-list.component';
import { ListaDePresencaEditComponent } from './lista-de-presenca-edit/lista-de-presenca-edit.component';



@NgModule({
  declarations: [ListaDePresencaListComponent, ListaDePresencaEditComponent],
  imports: [
    CommonModule
  ]
})
export class ListaDePresencaModule { }
