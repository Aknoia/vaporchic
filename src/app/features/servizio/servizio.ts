import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { listaServizi, ServiceData } from '../../data/dataservizi';

enum ServicesNames {
  Autovetture  ,
  Imbarcazioni ,
  Divani       ,
  Materassi    ,
  Tappeti      ,
  Locali       ,
  Abitazioni   ,
  Animali      ,
  Ambienti     ,
  Camper       ,
  Incendi     
}


@Component({
  selector: 'app-servizio',
  imports: [],
  templateUrl: './servizio.html',
  styleUrl: './servizio.css',
})

export class Servizio {
  staticHeader: String = 'LAVAGGIO A VAPORE E PULIZIA PROFESSIONALE AUTOVETTURE - BARCHE - CAMPER - YACHT CON SANIFICAZIONE A SIRACUSA Scegli VaporChic per la pulizia e la Sanificazione delle tue autovetture, camper, barche e yacht con vapore e prodotti waterless  eseguita direttamente A DOMICILIO in tutta la zona di Siracusa, Avola, Floridia, Noto, Canicattini Bagni, Belvedere, Priolo , Solarino, Sortino, Melilli, Augusta, Rosolini, Ispica, Pozzallo, Lentini';


  srvID   : string = 'Autovetture';
  numID   : number = 0;
  servizio: ServiceData;
  

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.srvID    = String(params.get('id'));

      this.numID = ServicesNames[this.srvID as keyof typeof ServicesNames];

      this.servizio = listaServizi[this.numID];
    })
  }
}
