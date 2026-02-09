import { Component } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router"; 

import { SidenavService } from "@app/services/sidenav";


@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.html',
    styleUrls: ['sidebar.css'],
    imports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, RouterLink, MatMenuModule],
})

export class Sidebar  {
    constructor(private sidenavService: SidenavService) {}

    closeMenu() {
        console.log('Closing Menu Sidebar');
        this.sidenavService.close();
    }
}