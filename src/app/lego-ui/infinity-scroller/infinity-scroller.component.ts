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
  @Input() public height = 'calc(100% - 64px)';
  @Output() public needToLoadMore = new EventEmitter<void>();

  onScroll(event: Event): void {
    if (this.loading) {
      return;
    }
    const target = event.target as HTMLElement;
    const value = target.scrollHeight - target.scrollTop - target.clientHeight;
    if (value < 300) {
      this.needToLoadMore.emit();
    }
  }

  constructor() {
  }

}
