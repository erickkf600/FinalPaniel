import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StViewLoginFormComponent } from './st-view-login-form.component';

describe('StViewLoginFormComponent', () => {
  let component: StViewLoginFormComponent;
  let fixture: ComponentFixture<StViewLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StViewLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StViewLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
