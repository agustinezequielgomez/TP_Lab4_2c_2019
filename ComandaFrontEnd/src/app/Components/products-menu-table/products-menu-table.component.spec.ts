import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMenuTableComponent } from './products-menu-table.component';

describe('ProductsMenuTableComponent', () => {
  let component: ProductsMenuTableComponent;
  let fixture: ComponentFixture<ProductsMenuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsMenuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMenuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
