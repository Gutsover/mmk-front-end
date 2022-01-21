import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdmComponent } from './sidebar-adv.component';

describe('SidebarAdvComponent', () => {
  let component: SidebarAdmComponent;
  let fixture: ComponentFixture<SidebarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
