import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegoUiModule } from '../lego-ui/lego-ui.module';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { RestModule } from '../rest/rest.module';
import { RestApiService } from '../rest/rest-api.service';
import { delay, map } from 'rxjs';
import { OptimizedImageInfo } from '../rest/OptimizedImageInfo';
import { MathHelper } from '../lego-ui/utils/MathHelper';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, LegoUiModule, MatGridListModule, RestModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements AfterViewInit {
  items: OptimizedImageInfo[] = [];
  loading = false;
  @ViewChild(MatGridList, {read: ElementRef}) gridList!: ElementRef;


  private imageWidth = 300;
  private page = 1;

  constructor(private cdr: ChangeDetectorRef,
              private el: ElementRef,
              private favoritesService: FavoritesService,
              private restApiService: RestApiService) {

  }

  addToFavorites(imageInfos: OptimizedImageInfo) {
    this.favoritesService.addToFavorite(imageInfos);
  }


  ngAfterViewInit() {
    this.imageWidth = Math.ceil((this.gridList.nativeElement.offsetWidth - 48) / 3);
    this.getItems();
  }

  getItems() {
    this.loading = true;
    this.restApiService.getImageList(this.page)
      .pipe(
        delay(MathHelper.getRandomInt(200, 300)),
        map((imageInfos) =>
          imageInfos.map((imageInfo) => new OptimizedImageInfo(imageInfo, this.imageWidth))))
      .subscribe((items) => {
        this.page = this.page + 1;
        this.items.push(...items);
        this.cdr.markForCheck();
        this.loading = false;
      });
  }
}
