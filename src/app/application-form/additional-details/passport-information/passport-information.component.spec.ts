import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PassportInformationComponent } from './passport-information.component';

describe('PassportInformationComponent', () => {
  let component: PassportInformationComponent;
  let fixture: ComponentFixture<PassportInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
