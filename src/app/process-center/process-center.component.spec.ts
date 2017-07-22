import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCenterComponent } from './process-center.component';

describe('ProcessCenterComponent', () => {
  let component: ProcessCenterComponent;
  let fixture: ComponentFixture<ProcessCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
