import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsClientListComponent } from './advisors-client-list.component';

describe('AdvisorsClientListComponent', () => {
  let component: AdvisorsClientListComponent;
  let fixture: ComponentFixture<AdvisorsClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisorsClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorsClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
