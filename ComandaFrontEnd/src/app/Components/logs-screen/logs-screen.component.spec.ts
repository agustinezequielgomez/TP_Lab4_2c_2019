import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsScreenComponent } from './logs-screen.component';

describe('LogsScreenComponent', () => {
  let component: LogsScreenComponent;
  let fixture: ComponentFixture<LogsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
