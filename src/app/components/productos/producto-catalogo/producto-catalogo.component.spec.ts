import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCatalogoComponent } from './producto-catalogo.component';

describe('ProductoCatalogoComponent', () => {
  let component: ProductoCatalogoComponent;
  let fixture: ComponentFixture<ProductoCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
