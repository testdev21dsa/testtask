import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegoUiModule } from '../lego-ui/lego-ui.module';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, LegoUiModule, MatGridListModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent {
  items:any = [];

  loading = false;
  constructor(private cdr: ChangeDetectorRef) {
    this.onScroll();
  }

  onScroll() {
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);
    this.items.push(1);

    //setTimeout(() => {this.loading = false}, 1000)
  }

  loadMore () {
    this.loading = true;
    setTimeout(() => {
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.items.push(1);
      this.loading = false;
      this.cdr.markForCheck();
    }, 1000)
  }
}
