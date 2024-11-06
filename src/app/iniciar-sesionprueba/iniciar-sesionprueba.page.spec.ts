import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarSesionpruebaPage } from './iniciar-sesionprueba.page';

describe('IniciarSesionpruebaPage', () => {
  let component: IniciarSesionpruebaPage;
  let fixture: ComponentFixture<IniciarSesionpruebaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionpruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
