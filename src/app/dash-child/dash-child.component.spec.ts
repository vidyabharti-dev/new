import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChildComponent } from './dash-child.component';

describe('DashChildComponent', () => {
  let component: DashChildComponent;
  let fixture: ComponentFixture<DashChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
