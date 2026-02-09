import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    this.sidenav.open();
  }

  public close() {
    this.sidenav.close();
  }

  public toggle() {
    console.log('Toggling Sidebar');

    return this.sidenav.toggle();
  } 
}
