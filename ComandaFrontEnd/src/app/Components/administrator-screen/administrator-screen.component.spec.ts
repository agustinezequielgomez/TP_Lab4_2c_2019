import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorScreenComponent } from './administrator-screen.component';

describe('AdministratorScreenComponent', () => {
  let component: AdministratorScreenComponent;
  let fixture: ComponentFixture<AdministratorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
