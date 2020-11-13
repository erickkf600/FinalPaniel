import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StNewsContainerComponent } from './st-news-container.component';

describe('StNewsContainerComponent', () => {
  let component: StNewsContainerComponent;
  let fixture: ComponentFixture<StNewsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StNewsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StNewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
