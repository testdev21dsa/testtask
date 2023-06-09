import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { OptimizedImageInfo } from '../rest/OptimizedImageInfo';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit, OnDestroy {
  optimizedImageInfo!: OptimizedImageInfo;
  showButton = true;
  private routeSub!: Subscription;
  @ViewChild('container') private container!: ElementRef;

  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private el: ElementRef,
              private favoritesService: FavoritesService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const imageInfo = this.favoritesService.getFavoriteImageInfoById(params['id']);
      if (imageInfo) {
        this.optimizedImageInfo = new OptimizedImageInfo(imageInfo, this.el.nativeElement.clientWidth - 48)
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  removeFromFavorite(): void {
    this.showButton = false;
    this.favoritesService.removeFromFavorite(this.optimizedImageInfo);
  }
}
