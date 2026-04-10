import { Component } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from "@angular/router";

import { SidenavService } from "@app/services/sidenavSrv/sidenav";

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.css'],
    imports: [MatMenuModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterLink],
})

export class Navbar {
    constructor(private sidenavService: SidenavService) {}

    menuOpen: boolean = false;

    openMenu() {
        console.log('Opening Menu Sidebar');
        this.menuOpen = true;
        
        this.sidenavService.open();
    }


    closeMenu() {
        console.log('Closing Sidebar');
        this.menuOpen = false;

        this.sidenavService.close();
    }
}