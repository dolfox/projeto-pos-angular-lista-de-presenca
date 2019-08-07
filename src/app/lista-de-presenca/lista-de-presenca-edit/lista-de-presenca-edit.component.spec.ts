import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaEditComponent } from './lista-de-presenca-edit.component';

describe('ListaDePresencaEditComponent', () => {
  let component: ListaDePresencaEditComponent;
  let fixture: ComponentFixture<ListaDePresencaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePresencaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePresencaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
