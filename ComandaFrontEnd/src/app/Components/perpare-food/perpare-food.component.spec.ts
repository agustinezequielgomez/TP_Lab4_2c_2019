import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpareFoodComponent } from './perpare-food.component';

describe('PerpareFoodComponent', () => {
  let component: PerpareFoodComponent;
  let fixture: ComponentFixture<PerpareFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpareFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpareFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
