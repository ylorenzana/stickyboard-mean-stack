import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sticky } from './sticky';

@Component({
  selector: 'sb-sticky-list-item',
  templateUrl: './sticky-list-item.component.html',
  styleUrls: ['../foundation-icons/foundation-icons.css', './sticky-list-item.component.css']
})
export class StickyListItemComponent implements OnInit {

  @Input() sticky: Sticky;

  @Output() toggleStickyComplete: EventEmitter<Sticky> = new EventEmitter();
  @Output() remove: EventEmitter<Sticky> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleComplete(sticky: Sticky){
    this.toggleStickyComplete.emit(sticky)
  }

  removeSticky(sticky: Sticky){
    this.remove.emit(sticky)
  }
}
