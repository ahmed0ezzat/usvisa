import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartTwoComponent } from './part-two.component';

describe('PartTwoComponent', () => {
  let component: PartTwoComponent;
  let fixture: ComponentFixture<PartTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
