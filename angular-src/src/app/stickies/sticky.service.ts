import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sticky } from './sticky';
import { ApiService } from '../api.service';

@Injectable()

export class StickyService {

  constructor(private api: ApiService) { }

  getStickies(): Observable<Sticky[]> {
    return this.api.getStickies();
  }

  addSticky(sticky: Sticky): Observable<Sticky> {
    if (!sticky) {
      return null;
    }
    return this.api.createSticky(sticky);
  }

  removeSticky(stickyId): Observable<Sticky> {
    return this.api.deleteStickyById(stickyId);
  }

  removeAllStickies(): Observable<Sticky> {
    return this.api.deleteAllStickies();
  }

  updateSticky(sticky: Sticky): Observable<Sticky> {
    return this.api.updateSticky(sticky);
  }

  toggleComplete(sticky: Sticky): Observable<Sticky> {
    sticky.isCompleted = !sticky.isCompleted;
    return this.api.updateSticky(sticky);
  }

  logoutUser() {
    return this.api.logoutUser();
  }
}