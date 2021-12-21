import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIdentityComponent } from './client-identity.component';

describe('ClientIdentityComponent', () => {
  let component: ClientIdentityComponent;
  let fixture: ComponentFixture<ClientIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
