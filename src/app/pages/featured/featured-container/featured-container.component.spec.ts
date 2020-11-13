import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedContainerComponent } from './featured-container.component';

describe('FeaturedContainerComponent', () => {
  let component: FeaturedContainerComponent;
  let fixture: ComponentFixture<FeaturedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
