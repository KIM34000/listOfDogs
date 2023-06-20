import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() toggleSort: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.toggleSort.emit();
  }
}

