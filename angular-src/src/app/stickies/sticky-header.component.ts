import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Sticky } from './sticky';

@Component({
  selector: 'sb-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['../foundation-icons/foundation-icons.css', './sticky-header.component.css']
})

export class StickyHeaderComponent implements OnInit {
  title: string = 'stickyboard';
  newSticky: Sticky = new Sticky();

  @Output() add: EventEmitter<Sticky> = new EventEmitter();
  @Output() removeAll: EventEmitter<any> = new EventEmitter();
  @Output() logout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addSticky(): void{
    if (!this.newSticky.text){
      return;
    }
    this.add.emit(this.newSticky);
    this.newSticky = new Sticky();
  }

  removeAllStickies(): void{
    this.removeAll.emit();
  }

  logoutUser() {
    this.logout.emit();
  }

  ngOnInit() {
  }

}
