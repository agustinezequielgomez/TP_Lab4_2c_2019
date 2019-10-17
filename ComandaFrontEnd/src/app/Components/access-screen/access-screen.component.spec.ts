import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessScreenComponent } from './access-screen.component';

describe('AccessScreenComponent', () => {
  let component: AccessScreenComponent;
  let fixture: ComponentFixture<AccessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
