import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezeroScreenComponent } from './cervezero-screen.component';

describe('CervezeroScreenComponent', () => {
  let component: CervezeroScreenComponent;
  let fixture: ComponentFixture<CervezeroScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervezeroScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezeroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
