import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        MatToolbarModule,
        MatButtonModule,
        RouterTestingModule
      ],
      providers:[Router, ChangeDetectorRef]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 buttons', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should have class selected first button with / route', fakeAsync(() => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    tick();
    fixture.detectChanges();
    expect(buttons[0].classList.contains('selected')).toBeTruthy();
  }));
});
