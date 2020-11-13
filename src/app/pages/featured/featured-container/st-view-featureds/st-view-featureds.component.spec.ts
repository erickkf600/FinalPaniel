import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StViewFeaturedsComponent } from './st-view-featureds.component';

describe('StViewFeaturedsComponent', () => {
  let component: StViewFeaturedsComponent;
  let fixture: ComponentFixture<StViewFeaturedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StViewFeaturedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StViewFeaturedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
