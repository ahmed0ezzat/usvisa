import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAuthorizationComponent } from './form-authorization.component';

describe('FormAuthorizationComponent', () => {
  let component: FormAuthorizationComponent;
  let fixture: ComponentFixture<FormAuthorizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
