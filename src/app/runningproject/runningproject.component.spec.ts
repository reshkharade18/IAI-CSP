import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningprojectComponent } from './runningproject.component';

describe('RunningprojectComponent', () => {
  let component: RunningprojectComponent;
  let fixture: ComponentFixture<RunningprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
