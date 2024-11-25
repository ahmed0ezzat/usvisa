import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TripInformationComponent } from './trip-information.component';

describe('TripInformationComponent', () => {
  let component: TripInformationComponent;
  let fixture: ComponentFixture<TripInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TripInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
