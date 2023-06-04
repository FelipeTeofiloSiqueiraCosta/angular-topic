import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public sidebarActived: boolean = true;
  constructor() {
    if (window.innerWidth <= 768) {
      this.sidebarActived = false;
    } else {
      this.sidebarActived = true;
    }
  }
}
