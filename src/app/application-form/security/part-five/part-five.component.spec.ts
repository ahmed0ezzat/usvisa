import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartFiveComponent } from './part-five.component';

describe('PartFiveComponent', () => {
  let component: PartFiveComponent;
  let fixture: ComponentFixture<PartFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
