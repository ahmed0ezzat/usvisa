import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdditionalNationalitiesComponent } from './additional-nationalities.component';

describe('AdditionalNationalitiesComponent', () => {
  let component: AdditionalNationalitiesComponent;
  let fixture: ComponentFixture<AdditionalNationalitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalNationalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalNationalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
