import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SevisInformationComponent } from './sevis-information.component';

describe('SevisInformationComponent', () => {
  let component: SevisInformationComponent;
  let fixture: ComponentFixture<SevisInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SevisInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevisInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
