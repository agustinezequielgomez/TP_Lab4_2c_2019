import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScreenComponent } from './client-screen.component';

describe('ClientScreenComponent', () => {
  let component: ClientScreenComponent;
  let fixture: ComponentFixture<ClientScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
