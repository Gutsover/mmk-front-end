import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsIdentityComponent } from './advisors-identity.component';

describe('AdvisorsIdentityComponent', () => {
  let component: AdvisorsIdentityComponent;
  let fixture: ComponentFixture<AdvisorsIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorsIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorsIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
