import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdditionalPointOfContactInformationComponent } from './additional-point-of-contact-information.component';

describe('AdditionalPointOfContactInformationComponent', () => {
  let component: AdditionalPointOfContactInformationComponent;
  let fixture: ComponentFixture<AdditionalPointOfContactInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalPointOfContactInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPointOfContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
