import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDePresencaModule, ListaPresencaService } from './lista-de-presenca';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaDePresencaModule
  ],
  providers: [
    ListaPresencaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
