import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinityScrollerComponent } from './infinity-scroller.component';
import { ChangeDetectorRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('InfinityScrollerComponent', () => {
  let component: InfinityScrollerComponent;
  let fixture: ComponentFixture<InfinityScrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfinityScrollerComponent],
      imports:[MatProgressSpinnerModule]
    });
    fixture = TestBed.createComponent(InfinityScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be default be height calc(100% - 64px)', () => {
    expect(component.height).toBe('calc(100% - 64px)');
  });

  it('scroller should change height if other param was passed', () => {
    component.height = '100px';
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.scroller').style.height).toBe('100px');
  });

  it('should show loader when loading',() => {
    component.loading = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.loader')).toBeTruthy();
  });

});
