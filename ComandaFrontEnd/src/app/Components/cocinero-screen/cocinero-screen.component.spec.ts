import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocineroScreenComponent } from './cocinero-screen.component';

describe('CocineroScreenComponent', () => {
  let component: CocineroScreenComponent;
  let fixture: ComponentFixture<CocineroScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocineroScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocineroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
