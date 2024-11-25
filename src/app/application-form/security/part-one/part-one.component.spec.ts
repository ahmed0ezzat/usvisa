import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartOneComponent } from './part-one.component';

describe('PartOneComponent', () => {
  let component: PartOneComponent;
  let fixture: ComponentFixture<PartOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
