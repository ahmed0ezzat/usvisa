import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartFourComponent } from './part-four.component';

describe('PartFourComponent', () => {
  let component: PartFourComponent;
  let fixture: ComponentFixture<PartFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
