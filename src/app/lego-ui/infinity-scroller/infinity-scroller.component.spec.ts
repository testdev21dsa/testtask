import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityScrollerComponent } from './infinity-scroller.component';

describe('InfinityScrollerComponent', () => {
  let component: InfinityScrollerComponent;
  let fixture: ComponentFixture<InfinityScrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfinityScrollerComponent]
    });
    fixture = TestBed.createComponent(InfinityScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
