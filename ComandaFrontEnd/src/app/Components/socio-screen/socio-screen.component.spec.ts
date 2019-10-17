import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioScreenComponent } from './socio-screen.component';

describe('SocioScreenComponent', () => {
  let component: SocioScreenComponent;
  let fixture: ComponentFixture<SocioScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
