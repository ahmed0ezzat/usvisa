import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdditionalDetailsComponent } from './additional-details.component';

describe('AdditionalDetailsComponent', () => {
  let component: AdditionalDetailsComponent;
  let fixture: ComponentFixture<AdditionalDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
