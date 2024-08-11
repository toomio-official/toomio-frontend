import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserProfileComponent } from './find-user-profile.component';

describe('FindUserProfileComponent', () => {
  let component: FindUserProfileComponent;
  let fixture: ComponentFixture<FindUserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindUserProfileComponent]
    });
    fixture = TestBed.createComponent(FindUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
