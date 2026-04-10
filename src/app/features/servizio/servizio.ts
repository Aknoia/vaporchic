import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { listaServizi, ServiceData } from '../../data/dataservizi';
import { AnimateOnScrollDirective } from '../../directives/animate_on_scroll/animate_on_scroll';
import { SeoService } from '@app/services/seoSrv/seo';


enum ServicesNames {
  autovetture  ,
  imbarcazioni ,
  divani       ,
  materassi    ,
  tappeti      ,
  locali       ,
  abitazioni   ,
  animali      ,
  ambienti     ,
  camper       ,
  incendi      ,
  cardetailing ,
  tendedasole  ,
  tappezzeria  ,
  puliziastraordinaria,
  casevacanza,
  puliziaordinaria
}


@Component({
  selector: 'app-servizio',
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './servizio.html',
  styleUrl: './servizio.css',
})

export class Servizio {
  staticText: String = '<span class="highlight_txt">Servizio a Domicilio</span> in tutta Siracusa e Avola, Floridia, Noto, Canicattini Bagni, Belvedere, Priolo , Solarino, Sortino, Melilli, Augusta, Rosolini, Ispica, Pozzallo, Palazzolo, Buccheri, Portopalo, Pachino, Villasmundo e Lentini.';


  srvID   : string = 'Autovetture';
  numID   : number = 0;
  servizio: ServiceData;
  

  constructor(private seo: SeoService, private route: ActivatedRoute, private title: Title, private meta: Meta,) {}


  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      // ID Servizio
      this.srvID    = String(params.get('id'));
      this.numID = ServicesNames[this.srvID as keyof typeof ServicesNames];
      this.servizio = listaServizi[this.numID];
    });

    

    // Metadata
    const data = this.route.snapshot.data;
    this.seo.updateSEO({
      title: data['title'] + this.servizio.name,
      description: data['description'] + this.servizio.name,
      siteName: data['siteName'],
      keywords: data['keywords'],
      url: data['url'],
      image: data['image']
    });
  }
}
