import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAuthPopulationDialogComponent } from './form-auth-population-dialog.component';

describe('FormAuthPopulationDialogComponent', () => {
  let component: FormAuthPopulationDialogComponent;
  let fixture: ComponentFixture<FormAuthPopulationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuthPopulationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthPopulationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
