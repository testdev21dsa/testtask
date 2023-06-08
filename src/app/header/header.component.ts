import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppRoutes } from '../AppRoutes';
import { NavigationButton } from '../NavigationButton';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnDestroy {
  public buttons: NavigationButton[] = AppRoutes.getNavigationButtons();
  private subscription!: Subscription;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.subscription = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe((event) => {
      this.buttons = this.buttons.map((button) => {
        button.selected = button.routerLink === event.url;
        return button;
      });
      this.cdr.markForCheck();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
