import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '@shared/components/navbar/navbar.module';
import { Sidebar } from "@app/shared/components/sidebar/sidebar.module";
import { SidenavService } from '@app/services/sidenav';

import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Footer } from "@app/shared/components/footer/footer";
import { Infobar } from "@app/shared/components/infobar/infobar";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Sidebar, MatSidenavModule, Footer, Infobar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})

export class Layout {
  @ViewChild('sidenav', { static: false}) sidenav!: MatSidenav;

  isServicesPage: boolean;

  constructor(private sidenavService: SidenavService) {
    console.log("LAYOUT COSTRUTTORE CARICATO");    
  };


  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
