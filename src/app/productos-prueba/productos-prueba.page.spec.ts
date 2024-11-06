import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPruebaPage } from './productos-prueba.page';

describe('ProductosPruebaPage', () => {
  let component: ProductosPruebaPage;
  let fixture: ComponentFixture<ProductosPruebaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
