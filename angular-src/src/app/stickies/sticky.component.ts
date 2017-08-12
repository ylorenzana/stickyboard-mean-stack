import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

import { Sticky } from './sticky';
import { StickyService } from './sticky.service';

@Component({
  selector: 'sb-sticky',
  templateUrl: './sticky.component.html'
})
export class StickyComponent implements OnInit {

  stickies: Sticky[] = [];

  constructor(private stickyService: StickyService, private router: Router) { }

  public ngOnInit() {
    this.stickyService.getStickies()
      .subscribe((stickies) => {
        this.stickies = stickies;
    });
  }

  onAddSticky(sticky) {
    this.stickyService.addSticky(sticky)
      .subscribe((newSticky) => {
        this.stickies = this.stickies.concat(newSticky);
    });
  }

  onToggleComplete(sticky) {
    this.stickyService.toggleComplete(sticky)
      .subscribe((updatedSticky) => {
        sticky = updatedSticky;
    });
  }

  onRemoveSticky(sticky) {
    this.stickyService.removeSticky(sticky._id)
      .subscribe(() => {
        this.stickies = this.stickies.filter((s) => s._id !== sticky._id);
      });
  }

  onRemoveAllStickies() {
    this.stickyService.removeAllStickies()
      .subscribe(() => this.stickies.length = 0);
  }

  onLogout() {
    this.stickyService.logoutUser()
      .subscribe();
  }

}