import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../favorites.service';
import { OptimizedImageInfo } from '../rest/OptimizedImageInfo';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MatGridListModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements AfterViewInit {
  items: OptimizedImageInfo[] = [];
  @ViewChild(MatGridList, {read: ElementRef}) gridList!: ElementRef;
  private imageWidth = 300;

  constructor(private favoritesService: FavoritesService,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.imageWidth = Math.ceil((this.gridList.nativeElement.offsetWidth - 48) / 3);
    this.getItems();
  }

  getItems(): void {
    this.items.push(...this.favoritesService.getFavoriteImageInfoList()
      .map((imageInfo) => new OptimizedImageInfo(imageInfo, this.imageWidth)));
    this.cdr.markForCheck();
  }
}
