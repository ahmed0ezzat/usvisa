import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OopsComponent } from './oops.component';

describe('OopsComponent', () => {
  let component: OopsComponent;
  let fixture: ComponentFixture<OopsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
