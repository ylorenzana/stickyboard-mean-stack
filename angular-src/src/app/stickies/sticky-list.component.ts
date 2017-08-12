import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sticky } from './sticky';


@Component({
  selector: 'sb-sticky-list',
  templateUrl: './sticky-list.component.html',
})

export class StickyListComponent implements OnInit {

  @Input() stickies: Sticky[];

  @Output() remove: EventEmitter<Sticky> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Sticky> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleComplete(sticky: Sticky){
    this.toggleComplete.emit(sticky);
  }

  onRemoveSticky(sticky: Sticky){
    this.remove.emit(sticky);
  }

}
