import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozoScreenComponent } from './mozo-screen.component';

describe('MozoScreenComponent', () => {
  let component: MozoScreenComponent;
  let fixture: ComponentFixture<MozoScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozoScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
