import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareFoodsComponent } from './prepare-foods.component';

describe('PrepareFoodsComponent', () => {
  let component: PrepareFoodsComponent;
  let fixture: ComponentFixture<PrepareFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
