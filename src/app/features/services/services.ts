import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-services',
  imports: [MatExpansionModule, MatIconModule, MatFormFieldModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})


export class Services {
  espandi : boolean = true;

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
    console.log('Gallery Init');
  }

  ngOnInit() {
      const data = this.route.snapshot.data;

      this.title.setTitle(data['title']);
      this.meta.updateTag({
          name: 'description',
          content: data['description']
      });
  }



  currIndex = 0;
  setIndex(newIndex: number) {
    this.currIndex = newIndex;
  }



  scrollToService(serviceIndex: number) {
    var srvTabName = '';

    switch(serviceIndex) {
      case 1: 
        srvTabName = "tab-auto";
      break;

      case 2:
        srvTabName = "tab-camper";
      break;

      case 3:
        srvTabName = "tab-barche";
      break;

      case 4:
        srvTabName = "tab-materassi";
      break;

      case 5: 
        srvTabName = "tab-divani";
      break;

      case 6:
        srvTabName = "tab-tappeti";
      break;

      case 7:
        srvTabName = "tab-locali";
      break;

      case 8:
        srvTabName = "tab-case";
      break;

      case 9:
        srvTabName = "tab-animali";
      break;
    }


    var serviceTab = document.getElementById(srvTabName);
    if (serviceTab) {
      serviceTab?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
