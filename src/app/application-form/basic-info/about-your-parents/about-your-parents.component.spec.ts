import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutYourParentsComponent } from './about-your-parents.component';

describe('AboutYourParentsComponent', () => {
  let component: AboutYourParentsComponent;
  let fixture: ComponentFixture<AboutYourParentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYourParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYourParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
