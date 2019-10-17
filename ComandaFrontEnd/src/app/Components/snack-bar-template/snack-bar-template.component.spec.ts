import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarTemplateComponent } from './snack-bar-template.component';

describe('SnackBarTemplateComponent', () => {
  let component: SnackBarTemplateComponent;
  let fixture: ComponentFixture<SnackBarTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
