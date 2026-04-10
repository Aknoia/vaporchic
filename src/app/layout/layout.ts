import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { Navbar } from '@shared/components/navbar/navbar.module';
import { Sidebar } from "@app/shared/components/sidebar/sidebar.module";
import { SidenavService } from '@app/services/sidenavSrv/sidenav';

import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Footer } from "@app/shared/components/footer/footer";
import { Infobar } from "@app/shared/components/infobar/infobar";
import { LoadingService } from '@app/services/loading/loading';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Sidebar, MatSidenavModule, Footer, Infobar, AsyncPipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})

export class Layout {
  @ViewChild('sidenav', { static: false}) sidenav!: MatSidenav;

  isLoading$: Observable<boolean>;


  constructor(private sidenavService: SidenavService, @Inject(PLATFORM_ID) private platformId: Object, public loadingService: LoadingService) {
    console.log("LAYOUT COSTRUTTORE CARICATO");  
  };


  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);

    this.isLoading$ = this.loadingService.isLoading$;
  }


  closeMenu() {
    if (this.sidenavService.isOpen()) {
      console.log('Closing Menu Sidebar');
      this.sidenavService.close();
    }
  }
}
