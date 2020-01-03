import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoGaleriaComponent } from './producto-galeria.component';

describe('ProductoGaleriaComponent', () => {
  let component: ProductoGaleriaComponent;
  let fixture: ComponentFixture<ProductoGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
