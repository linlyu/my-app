import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickServiceComponent } from './quick-service.component';

describe('QuickServiceComponent', () => {
  let component: QuickServiceComponent;
  let fixture: ComponentFixture<QuickServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
