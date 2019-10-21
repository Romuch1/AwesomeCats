import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDateComponent } from './dashboard-date.component';

describe('DashboardDateComponent', () => {
  let component: DashboardDateComponent;
  let fixture: ComponentFixture<DashboardDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
