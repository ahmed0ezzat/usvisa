import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdditionalQuestionsComponent } from './additional-questions.component';

describe('AdditionalQuestionsComponent', () => {
  let component: AdditionalQuestionsComponent;
  let fixture: ComponentFixture<AdditionalQuestionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
