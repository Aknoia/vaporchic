import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { SeoService } from '@app/services/seoSrv/seo';

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  constructor(private seo: SeoService, private route: ActivatedRoute, private title: Title, private meta: Meta) {
      console.log('Contattaci Init');
  }

  ngOnInit() {
      const data = this.route.snapshot.data;

      this.seo.updateSEO({
          title: data['title'],
          description: data['description'],
          siteName: data['siteName'],
          keywords: data['keywords'],
          url: data['url'],
          image: data['image']
      });
  }
}
