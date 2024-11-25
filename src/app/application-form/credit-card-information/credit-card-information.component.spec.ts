import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreditCardInformationComponent } from './credit-card-information.component';

describe('CreditCardInformationComponent', () => {
  let component: CreditCardInformationComponent;
  let fixture: ComponentFixture<CreditCardInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
