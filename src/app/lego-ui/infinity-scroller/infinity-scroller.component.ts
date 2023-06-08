import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-infinity-scroller',
  templateUrl: './infinity-scroller.component.html',
  styleUrls: ['./infinity-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfinityScrollerComponent {
  @Input() public loading = false;
  @Output() public needToLoadMore = new EventEmitter<void>();

  onScroll(event: Event) {
    if (this.loading) {
      return;
    }
    const value = (event.target as HTMLElement).scrollHeight - (event.target as HTMLElement).scrollTop - (event.target as HTMLElement).clientHeight
    if (value < 300) {
      this.needToLoadMore.emit();
    }
  }

  constructor() {
  }

}
