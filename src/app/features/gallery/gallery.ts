import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { SeoService } from '@app/services/seoSrv/seo';
import { TrackLoad } from '../../directives/track_load/track-load';
import { LoadingService } from '@app/services/loading/loading';


@Component({
  selector: 'app-gallery',
  imports: [TrackLoad],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})


export class Gallery {

  constructor(private seo: SeoService, private route: ActivatedRoute, private title: Title, private meta: Meta, private loadingService: LoadingService) {
    console.log('Gallery Init');
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


  selectedTab = 0;
  tabs = [
    {
      title: "Automotive",
    },

    {
      title: "Imbarcazioni",
    },

    {
      title: "Materassi",
    },

    {
      title: "Tappeti",
    },

    {
      title: "Locali e Negozi",
    },

    {
      title: "Tende da Sole",
    },

    {
      title: "Cantieri",
    },

    {
      title: "Divani",
    },

    {
      title: "Abitazioni",
    },

    {
      title: "Case Incendiate",
    },

    {
      title: "Pavimenti"
    },

    {
      title: "Vetrate"
    },

    {
      title: "Ambientale"
    },

    {
      title: "Camper"
    },

    {
      title: "Lettini"
    },

    {
      title: "Cappe Cucina"
    }
  ]


  currTab  = 0;
  galleria = [

    // Autovetture
    [
      "assets/gallery/autovetture/auto1.webp",
      "assets/gallery/autovetture/auto2.gif",
      "assets/gallery/autovetture/auto3.webp",
      "assets/gallery/autovetture/auto4.webp",
      "assets/gallery/autovetture/auto5.webp",
      "assets/gallery/autovetture/auto6.webp",
      "assets/gallery/autovetture/auto7.webp",
      "assets/gallery/autovetture/auto8.gif",
      "assets/gallery/autovetture/auto9.webp",
      "assets/gallery/autovetture/auto10.webp",
      "assets/gallery/autovetture/auto11.webp",
      "assets/gallery/autovetture/auto12.webp",
      "assets/gallery/autovetture/auto13.webp",
      "assets/gallery/autovetture/auto14.webp",
      "assets/gallery/autovetture/auto16.webp",
      "assets/gallery/autovetture/auto17.webp",
      "assets/gallery/autovetture/auto18.webp",
      "assets/gallery/autovetture/auto19.webp",
      "assets/gallery/autovetture/auto20.webm",
      "assets/gallery/autovetture/auto21.webm",
      "assets/gallery/autovetture/auto22.webm",
      "assets/gallery/autovetture/auto23.webm",
      "assets/gallery/autovetture/auto24.webp",
      "assets/gallery/autovetture/auto25.webm",
      "assets/gallery/autovetture/auto27.webm",
      "assets/gallery/autovetture/auto26.webp",
      "assets/gallery/autovetture/auto28.webp",
      "assets/gallery/autovetture/auto29.webp",
      "assets/gallery/autovetture/auto30.webp",
      "assets/gallery/autovetture/auto31.webp",
      "assets/gallery/autovetture/auto32.webp",
      "assets/gallery/autovetture/auto33.webp",
      "assets/gallery/autovetture/auto34.webp",
      "assets/gallery/autovetture/auto35.webp",
      "assets/gallery/autovetture/auto36.webp",
      "assets/gallery/autovetture/auto37.webm",

      "assets/gallery/autovetture/auto.webm",
      "assets/gallery/autovetture/auto2.webm",
      "assets/gallery/autovetture/auto3.webm",
      "assets/gallery/autovetture/auto4.webm",
      "assets/gallery/autovetture/auto5.webm",
      "assets/gallery/autovetture/auto6.webm",
      "assets/gallery/autovetture/auto7.webm",
      "assets/gallery/autovetture/auto8.webm",
      "assets/gallery/autovetture/auto9.webm",
      "assets/gallery/autovetture/auto10.webm",
      "assets/gallery/autovetture/auto11.webm",
      "assets/gallery/autovetture/auto12.webm",
      "assets/gallery/autovetture/auto13.webm",
      "assets/gallery/autovetture/auto14.webm",
      "assets/gallery/autovetture/auto15.webm",
      "assets/gallery/autovetture/auto16.webm",
      "assets/gallery/autovetture/auto38.webp",
      "assets/gallery/autovetture/auto39.webp",
      "assets/gallery/autovetture/furgone.webm",
      "assets/gallery/autovetture/furgone2.webm",

      "assets/gallery/autovetture/auto40.webp",
      "assets/gallery/autovetture/auto41.webp",
      "assets/gallery/autovetture/auto42.webp",
      "assets/gallery/autovetture/auto43.webm",
    ],

    
    // Imbarcazioni
    [
      "assets/gallery/imbarcazioni/imbarcazioni1.gif",
      "assets/gallery/imbarcazioni/imbarcazioni2.gif",
      "assets/gallery/imbarcazioni/imbarcazioni3.gif",
      "assets/gallery/imbarcazioni/imbarcazioni4.webp",
      "assets/gallery/imbarcazioni/imbarcazioni5.webp",
      "assets/gallery/imbarcazioni/imbarcazioni6.webp",
      "assets/gallery/imbarcazioni/imbarcazioni7.webm",

      "assets/gallery/imbarcazioni/imbarcazioni8.webp",
      "assets/gallery/imbarcazioni/imbarcazioni9.webp",
      "assets/gallery/imbarcazioni/imbarcazioni10.webp",
      "assets/gallery/imbarcazioni/imbarcazioni11.webp",
      "assets/gallery/imbarcazioni/imbarcazioni12.webp",
      "assets/gallery/imbarcazioni/imbarcazioni13.webm",
      "assets/gallery/imbarcazioni/imbarcazioni14.webm",
      "assets/gallery/imbarcazioni/imbarcazioni15.webm",
      "assets/gallery/imbarcazioni/imbarcazioni16.webm",
      "assets/gallery/imbarcazioni/imbarcazioni17.webm",
      "assets/gallery/imbarcazioni/imbarcazioni18.webm",
      "assets/gallery/imbarcazioni/imbarcazioni19.webp",
      "assets/gallery/imbarcazioni/imbarcazioni20.webp",
      "assets/gallery/imbarcazioni/imbarcazioni21.webp",
      "assets/gallery/imbarcazioni/imbarcazioni22.webp",
      "assets/gallery/imbarcazioni/imbarcazioni23.webp",
      "assets/gallery/imbarcazioni/imbarcazioni24.webp",
      "assets/gallery/imbarcazioni/imbarcazioni25.webp",
    ],


    // Materassi
    [
      "assets/gallery/materassi/materassi2.webp",
      "assets/gallery/materassi/materassi3.webp",
      "assets/gallery/materassi/materassi4.webp",
      "assets/gallery/materassi/materassi5.webp",
      "assets/gallery/materassi/materassi6.webp",
      "assets/gallery/materassi/materassi7.webp",
      "assets/gallery/materassi/materassi8.webp",
      "assets/gallery/materassi/materassi9.webp",
      "assets/gallery/materassi/materassi10.webp",
      "assets/gallery/materassi/materassi11.webp",
      "assets/gallery/materassi/materassi12.webp",
      "assets/gallery/materassi/materassi13.webp",
      "assets/gallery/materassi/materassi14.webp",
      "assets/gallery/materassi/materassi15.webp",
      "assets/gallery/materassi/materassi16.webp",
      "assets/gallery/materassi/materassi17.webp",
      "assets/gallery/materassi/materassi18.webp",
    ],


    // Tappeti
    [
      "assets/gallery/tappeti/tappeti1.webp",
      "assets/gallery/tappeti/tappeti2.webp",
      "assets/gallery/tappeti/tappeti3.webp",
      "assets/gallery/tappeti/tappeti4.webp",
      "assets/gallery/tappeti/tappeti5.webp",
      "assets/gallery/tappeti/tappeti6.webp",
      "assets/gallery/tappeti/tappeti7.webp",
      "assets/gallery/tappeti/tappeti8.gif",
      "assets/gallery/tappeti/tappeti9.webp",
      "assets/gallery/tappeti/tappeti10.webp",

      "assets/gallery/tappeti/tappeti11.webp",
      "assets/gallery/tappeti/tappeti12.webp",
      "assets/gallery/tappeti/tappeti13.webp",
      "assets/gallery/tappeti/tappeti14.webp",
      "assets/gallery/tappeti/tappeti15.webp",
      "assets/gallery/tappeti/tappeti16.webp",
      "assets/gallery/tappeti/tappeti17.webp",
      "assets/gallery/tappeti/tappeti18.webp",

      "assets/gallery/tappeti/tappeti.webm",
      "assets/gallery/tappeti/tappeti2.webm",
      "assets/gallery/tappeti/tappeti3.webm",
      "assets/gallery/tappeti/tappeti4.webm",
      "assets/gallery/tappeti/tappeti5.webm",
      "assets/gallery/tappeti/tappeti6.webm",
      "assets/gallery/tappeti/tappeti7.webm",
      "assets/gallery/tappeti/tappeti8.webm",
    ],


    // Locali
    [
      "assets/gallery/locali/locali.webp",
      "assets/gallery/locali/locali1.gif",
      "assets/gallery/locali/locali2.webp",
      "assets/gallery/locali/locali3.webp",
      "assets/gallery/locali/locali4.webp",
      "assets/gallery/locali/locali5.webp",
      "assets/gallery/locali/locali6.webp",
      "assets/gallery/locali/locali7.webp",
      "assets/gallery/locali/locali8.webp",
      "assets/gallery/locali/locali9.webp",
      "assets/gallery/locali/locali10.webp",
      "assets/gallery/locali/locali11.gif",
      "assets/gallery/locali/locali12.webp",
      "assets/gallery/locali/locali13.webm",
      "assets/gallery/locali/locali14.webp",
      "assets/gallery/locali/locali15.webp",
      "assets/gallery/locali/locali16.webp",
      "assets/gallery/locali/locali17.webp",
      "assets/gallery/locali/locali18.webp",
      "assets/gallery/locali/locali19.webp",
      "assets/gallery/locali/locali20.webp",
      "assets/gallery/locali/locali21.webp",
      "assets/gallery/locali/locali22.webp",
      "assets/gallery/locali/locali23.webp",
      "assets/gallery/locali/locali24.webp",
      "assets/gallery/locali/locali25.webp",
      "assets/gallery/locali/locali26.webp",
      "assets/gallery/locali/locali27.webp",
      "assets/gallery/locali/locali28.webp",
      "assets/gallery/locali/locali29.webp",
      "assets/gallery/locali/locali30.webp",
      "assets/gallery/locali/locali31.webp",
      "assets/gallery/locali/locali32.webp",
      "assets/gallery/locali/locali33.webp",
      "assets/gallery/locali/locali34.webp",
      "assets/gallery/locali/locali35.webp",
      "assets/gallery/locali/locali36.webp",
      "assets/gallery/locali/locali37.webp",
      "assets/gallery/locali/locali38.webp",
      "assets/gallery/locali/locali39.webp",
      "assets/gallery/locali/locali42.webp",
      "assets/gallery/locali/locali43.webp",
      "assets/gallery/locali/locali44.webp",
      "assets/gallery/locali/locali45.webp",
      "assets/gallery/locali/locali46.webp",
      "assets/gallery/locali/locali47.webp",
      "assets/gallery/locali/locali48.webm",
      "assets/gallery/locali/locali49.webm",
      "assets/gallery/locali/locali50.webm",
      "assets/gallery/locali/locali51.webm",
      "assets/gallery/locali/locali52.webm",

      "assets/gallery/locali/locali53.webp",
      "assets/gallery/locali/locali54.webp",
      "assets/gallery/locali/locali55.webp",
      "assets/gallery/locali/locali56.webp",
      "assets/gallery/locali/locali57.webp",
      "assets/gallery/locali/locali58.webm",
    ],


    // Tende
    [
      "assets/gallery/tende/tende1.gif",
      "assets/gallery/tende/tende2.webp",
      "assets/gallery/tende/tende3.webp",
      "assets/gallery/tende/tende4.webp",
      "assets/gallery/tende/tende5.webp",
      "assets/gallery/tende/tende6.webp",
    ],


    // Cantiere
    [
      "assets/gallery/cantieri/cantiere1.webp",
      "assets/gallery/cantieri/cantiere2.webp",
      "assets/gallery/cantieri/cantiere3.webp",
      "assets/gallery/cantieri/cantiere4.webp",
      "assets/gallery/cantieri/cantiere5.webp",
      "assets/gallery/cantieri/cantiere6.webp",
      "assets/gallery/cantieri/cantiere7.webp",
    ],


    // Divani
    [
      "assets/gallery/divani/divani.webp",
      "assets/gallery/divani/divani2.webp",
      "assets/gallery/divani/divani3.webp",
      "assets/gallery/divani/divani4.webp",
      "assets/gallery/divani/divani5.webp",
      "assets/gallery/divani/divano6.webp",
      "assets/gallery/divani/divani7.webp",
      "assets/gallery/divani/divani8.webp",
      "assets/gallery/divani/divani9.webp",
      "assets/gallery/divani/divani10.webp",
      "assets/gallery/divani/divani11.webp",
      "assets/gallery/divani/divani12.webm",
      "assets/gallery/divani/divani.webm",
      "assets/gallery/divani/sedie.webp",
    ],


    // Abitazioni
    [
      "assets/gallery/abitazioni/casa.webp",
      "assets/gallery/abitazioni/casa2.webp",
      "assets/gallery/abitazioni/casa3.webp",
      "assets/gallery/abitazioni/casa4.webp",
      "assets/gallery/abitazioni/casa5.webp",
      "assets/gallery/abitazioni/casa6.webp",
      "assets/gallery/abitazioni/casa7.webp",
      "assets/gallery/abitazioni/casa8.webp",
      "assets/gallery/abitazioni/casa9.webp",
      "assets/gallery/abitazioni/casa10.webp",
      "assets/gallery/abitazioni/casa11.webp",
      "assets/gallery/abitazioni/casa12.webp",
      "assets/gallery/abitazioni/casa13.webp",
      "assets/gallery/abitazioni/casa14.webp",
      "assets/gallery/abitazioni/casa15.webp",
      "assets/gallery/abitazioni/casa16.webp",
      "assets/gallery/abitazioni/casa17.webp",

      "assets/gallery/abitazioni/casa18.webp",
      "assets/gallery/abitazioni/casa19.webp",
      "assets/gallery/abitazioni/casa20.webp",
      "assets/gallery/abitazioni/casa21.webp",
      "assets/gallery/abitazioni/casa22.webp",
      "assets/gallery/abitazioni/casa23.webp",
      "assets/gallery/abitazioni/casa24.webp",
      "assets/gallery/abitazioni/casa25.webp",
      "assets/gallery/abitazioni/casa26.webp",
      "assets/gallery/abitazioni/casa27.webp",
      "assets/gallery/abitazioni/casa28.webp",
      "assets/gallery/abitazioni/casa29.webp",
      "assets/gallery/abitazioni/casa30.webp",
      "assets/gallery/abitazioni/casa31.webp",
      "assets/gallery/abitazioni/casa32.webp",
      "assets/gallery/abitazioni/casa33.webp",

      // Video
      "assets/gallery/abitazioni/casa.webm",
      "assets/gallery/abitazioni/casa2.webm",
      "assets/gallery/abitazioni/casa3.webm",
      "assets/gallery/abitazioni/casa4.webm",
      "assets/gallery/abitazioni/casa5.webm",
      "assets/gallery/abitazioni/casa6.webm",
      "assets/gallery/abitazioni/casa7.webm",
      "assets/gallery/abitazioni/casa8.webm",
    ],


    // Pulizia Incendi
    [
      "assets/gallery/incendi/incendio.webm",
      "assets/gallery/incendi/incendio2.webm",
      "assets/gallery/incendi/incendio4.webm",
      "assets/gallery/incendi/incendio5.webm",
      "assets/gallery/incendi/incendio6.webm",

      "assets/gallery/incendi/incendio.webp",
      "assets/gallery/incendi/incendio2.webp",
      "assets/gallery/incendi/incendio3.webp",
      "assets/gallery/incendi/incendio4.webp",
      "assets/gallery/incendi/incendio5.webp",
      "assets/gallery/incendi/incendio6.webp",
      "assets/gallery/incendi/incendio7.webp",
      "assets/gallery/incendi/incendio8.webp",
      "assets/gallery/incendi/incendio9.webp",
      "assets/gallery/incendi/incendio10.webp",
      "assets/gallery/incendi/incendio11.webp",
      "assets/gallery/incendi/incendio12.webp",
      "assets/gallery/incendi/incendio13.webp",
      "assets/gallery/incendi/incendio14.webp",
    ],


    // Lucidatura Pavimenti
    [
      "assets/gallery/pavimenti/casa.webp",
      "assets/gallery/pavimenti/casa2.webp",
      "assets/gallery/pavimenti/casa3.webp",
      "assets/gallery/pavimenti/casa7.webp",
      "assets/gallery/pavimenti/casa8.webp",
      "assets/gallery/pavimenti/casa10.webp",
    ],


    // Vetrate
    [
      "assets/gallery/vetrate/vetrate.webp",
      "assets/gallery/vetrate/vetrate2.webp",
      "assets/gallery/vetrate/vetrate3.webp",
      "assets/gallery/vetrate/vetrate4.webp",
      "assets/gallery/vetrate/vetrate5.webp",
      "assets/gallery/vetrate/vetrate6.webp",
    ],

    // Ambientale
    [
      "assets/gallery/ambiente/ambientale.webp",
      "assets/gallery/ambiente/ambientale2.webp",

      "assets/gallery/ambiente/ambientale.webm",
      "assets/gallery/ambiente/ambientale2.webm",
      "assets/gallery/ambiente/ambientale3.webm",
      "assets/gallery/ambiente/ambientale4.webm",
      "assets/gallery/ambiente/ambientale5.webm",
    ],


    // Camper 
    [
      "assets/gallery/camper/camper2.webp",
      "assets/gallery/camper/camper3.webp",
      "assets/gallery/camper/camper4.webp",
      "assets/gallery/camper/camper5.webp",
      "assets/gallery/camper/camper6.webp",

      "assets/gallery/camper/camper.webm",
      "assets/gallery/camper/camper3.webm",
      "assets/gallery/camper/camper4.webm",
      "assets/gallery/camper/camper5.webm",
      "assets/gallery/camper/camper6.webm",
      "assets/gallery/camper/camper7.webm",
      "assets/gallery/camper/camper8.webm",
      "assets/gallery/camper/camper9.webm"
    ],

    // Lettini
    [
      "assets/gallery/lettini/lettini.webp",
      "assets/gallery/lettini/lettini2.webp",
      "assets/gallery/lettini/lettini3.webp",
      "assets/gallery/lettini/lettini4.webp",
      "assets/gallery/lettini/lettini5.webp",
      "assets/gallery/lettini/lettini6.webp",
      "assets/gallery/lettini/lettini7.webp",
      "assets/gallery/lettini/lettini8.webp",
      "assets/gallery/lettini/lettini9.webp",
      "assets/gallery/lettini/lettini10.webp",
      "assets/gallery/lettini/lettini11.webp",
      "assets/gallery/lettini/lettini12.webp",
      "assets/gallery/lettini/lettini13.webp",
      "assets/gallery/lettini/lettini14.webp",
      "assets/gallery/lettini/lettini15.webp",
    ],

    // Cappe
    [
      "assets/gallery/cappe/cappe.webm",
      "assets/gallery/cappe/cappe.webp",
      "assets/gallery/cappe/cappe2.webp",
      "assets/gallery/cappe/cappe3.webm",
      "assets/gallery/cappe/cappe4.webp",
    ]
  ]

  selectTab(index: number) {
    this.loadingService.reset();

    this.selectedTab = index;
    this.currTab     = index;
  }
}
