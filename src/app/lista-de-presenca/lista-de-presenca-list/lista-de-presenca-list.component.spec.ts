import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaListComponent } from './lista-de-presenca-list.component';

describe('ListaDePresencaListComponent', () => {
  let component: ListaDePresencaListComponent;
  let fixture: ComponentFixture<ListaDePresencaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePresencaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePresencaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
