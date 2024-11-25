import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PastTravelApplicationsComponent } from './past-travel-applications.component';

describe('PastTravelApplicationsComponent', () => {
  let component: PastTravelApplicationsComponent;
  let fixture: ComponentFixture<PastTravelApplicationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTravelApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTravelApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
