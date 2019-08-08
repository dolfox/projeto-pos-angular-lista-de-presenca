import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaCreateComponent } from './lista-de-presenca-create.component';

describe('ListaDePresencaCreateComponent', () => {
  let component: ListaDePresencaCreateComponent;
  let fixture: ComponentFixture<ListaDePresencaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePresencaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePresencaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
