import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditClientCardComponent } from './audit-client-card.component';

describe('AuditClientCardComponent', () => {
  let component: AuditClientCardComponent;
  let fixture: ComponentFixture<AuditClientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditClientCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditClientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
