import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})


export class Gallery {

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
      title: "Canteri",
    },

    {
      title: "Divani",
    },

    {
      title: "Abitazioni",
    },

    {
      title: "Fuligine",
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
    }
  ]


  currTab  = 0;
  galleria = [

    // Autovetture
    [
      "assets/gallery/autovetture/auto1.png",
      "assets/gallery/autovetture/auto2.gif",
      "assets/gallery/autovetture/auto3.png",
      "assets/gallery/autovetture/auto4.png",
      "assets/gallery/autovetture/auto5.png",
      "assets/gallery/autovetture/auto6.png",
      "assets/gallery/autovetture/auto7.png",
      "assets/gallery/autovetture/auto8.gif",
      "assets/gallery/autovetture/auto9.png",
      "assets/gallery/autovetture/auto10.png",
      "assets/gallery/autovetture/auto11.png",
      "assets/gallery/autovetture/auto12.png",
      "assets/gallery/autovetture/auto13.jpg",
      "assets/gallery/autovetture/auto14.jpg",
      "assets/gallery/autovetture/auto16.jpeg",
      "assets/gallery/autovetture/auto17.jpeg",
      "assets/gallery/autovetture/auto18.jpeg",
      "assets/gallery/autovetture/auto19.jpeg",
      "assets/gallery/autovetture/auto20.mp4",
      "assets/gallery/autovetture/auto21.mp4",
      "assets/gallery/autovetture/auto22.mp4",
      "assets/gallery/autovetture/auto23.mp4",
      "assets/gallery/autovetture/auto24.jpeg",
      "assets/gallery/autovetture/auto25.mp4",
      "assets/gallery/autovetture/auto27.mp4",
      "assets/gallery/autovetture/auto26.jpeg",
      "assets/gallery/autovetture/auto28.jpeg",
      "assets/gallery/autovetture/auto29.jpeg",
      "assets/gallery/autovetture/auto30.jpeg",
      "assets/gallery/autovetture/auto31.jpeg",
      "assets/gallery/autovetture/auto32.jpeg",
      "assets/gallery/autovetture/auto33.jpeg",
      "assets/gallery/autovetture/auto34.jpeg",
      "assets/gallery/autovetture/auto35.jpeg",
      "assets/gallery/autovetture/auto36.jpeg",
      "assets/gallery/autovetture/auto37.mp4",

      "assets/gallery/autovetture/auto.mp4",
      "assets/gallery/autovetture/auto2.mp4",
      "assets/gallery/autovetture/auto3.mp4",
      "assets/gallery/autovetture/auto4.mp4",
      "assets/gallery/autovetture/auto5.mp4",
      "assets/gallery/autovetture/auto6.mp4",
      "assets/gallery/autovetture/auto7.mp4",
      "assets/gallery/autovetture/auto8.mp4",
      "assets/gallery/autovetture/auto9.mp4",
      "assets/gallery/autovetture/auto10.mp4",
      "assets/gallery/autovetture/auto11.mp4",
      "assets/gallery/autovetture/auto12.mp4",
      "assets/gallery/autovetture/auto13.mp4",
      "assets/gallery/autovetture/auto14.mp4",
      "assets/gallery/autovetture/auto15.mp4",
      "assets/gallery/autovetture/auto16.mp4",
      "assets/gallery/autovetture/auto38.jpeg",
      "assets/gallery/autovetture/auto39.jpeg",
      "assets/gallery/autovetture/furgone.mp4",
      "assets/gallery/autovetture/furgone2.mp4",
    ],

    
    // Imbarcazioni
    [
      "assets/gallery/imbarcazioni/imbarcazioni1.gif",
      "assets/gallery/imbarcazioni/imbarcazioni2.gif",
      "assets/gallery/imbarcazioni/imbarcazioni3.gif",
      "assets/gallery/imbarcazioni/imbarcazioni4.png",
      "assets/gallery/imbarcazioni/imbarcazioni5.png",
      "assets/gallery/imbarcazioni/imbarcazioni6.png",
      "assets/gallery/imbarcazioni/imbarcazioni7.mp4",
    ],


    // Materassi
    [
      "assets/gallery/materassi/materassi2.png",
      "assets/gallery/materassi/materassi3.png",
      "assets/gallery/materassi/materassi4.png",
      "assets/gallery/materassi/materassi5.png",
      "assets/gallery/materassi/materassi6.png",
      "assets/gallery/materassi/materassi7.png",
      "assets/gallery/materassi/materassi8.png",
      "assets/gallery/materassi/materassi9.png",
      "assets/gallery/materassi/materassi10.png",
      "assets/gallery/materassi/materassi11.png",
      "assets/gallery/materassi/materassi12.png",
      "assets/gallery/materassi/materassi13.png",
      "assets/gallery/materassi/materassi14.jpeg",
      "assets/gallery/materassi/materassi15.jpeg",
      "assets/gallery/materassi/materassi16.jpeg",
      "assets/gallery/materassi/materassi17.jpeg",
      "assets/gallery/materassi/materassi18.jpeg",
    ],


    // Tappeti
    [
      "assets/gallery/tappeti/tappeti1.png",
      "assets/gallery/tappeti/tappeti2.png",
      "assets/gallery/tappeti/tappeti3.png",
      "assets/gallery/tappeti/tappeti4.png",
      "assets/gallery/tappeti/tappeti5.png",
      "assets/gallery/tappeti/tappeti6.png",
      "assets/gallery/tappeti/tappeti7.png",
      "assets/gallery/tappeti/tappeti8.gif",
      "assets/gallery/tappeti/tappeti9.jpeg",
      "assets/gallery/tappeti/tappeti10.jpeg",

      "assets/gallery/tappeti/tappeti11.jpeg",
      "assets/gallery/tappeti/tappeti12.jpeg",
      "assets/gallery/tappeti/tappeti13.jpeg",
      "assets/gallery/tappeti/tappeti14.jpeg",
      "assets/gallery/tappeti/tappeti15.jpeg",
      "assets/gallery/tappeti/tappeti16.jpeg",
      "assets/gallery/tappeti/tappeti17.jpeg",
      "assets/gallery/tappeti/tappeti18.jpeg",

      "assets/gallery/tappeti/tappeti.mp4",
      "assets/gallery/tappeti/tappeti2.mp4",
      "assets/gallery/tappeti/tappeti3.mp4",
      "assets/gallery/tappeti/tappeti4.mp4",
      "assets/gallery/tappeti/tappeti5.mp4",
      "assets/gallery/tappeti/tappeti6.mp4",
      "assets/gallery/tappeti/tappeti7.mp4",
      "assets/gallery/tappeti/tappeti8.mp4",
    ],


    // Locali
    [
      "assets/gallery/locali/locali.jpeg",
      "assets/gallery/locali/locali1.gif",
      "assets/gallery/locali/locali2.png",
      "assets/gallery/locali/locali3.png",
      "assets/gallery/locali/locali4.png",
      "assets/gallery/locali/locali5.png",
      "assets/gallery/locali/locali6.png",
      "assets/gallery/locali/locali7.png",
      "assets/gallery/locali/locali8.png",
      "assets/gallery/locali/locali9.png",
      "assets/gallery/locali/locali10.png",
      "assets/gallery/locali/locali11.gif",
      "assets/gallery/locali/locali12.jpg",
      "assets/gallery/locali/locali13.mp4",
      "assets/gallery/locali/locali14.jpg",
      "assets/gallery/locali/locali15.jpg",
      "assets/gallery/locali/locali16.jpg",
      "assets/gallery/locali/locali17.jpg"
    ],


    // Tende
    [
      "assets/gallery/tende/tende1.gif",
      "assets/gallery/tende/tende2.png",
      "assets/gallery/tende/tende3.png",
      "assets/gallery/tende/tende4.png",
      "assets/gallery/tende/tende5.jpg",
      "assets/gallery/tende/tende6.jpg",
    ],


    // Cantiere
    [
      "assets/gallery/cantieri/cantiere1.png",
      "assets/gallery/cantieri/cantiere2.png",
      "assets/gallery/cantieri/cantiere3.png",
      "assets/gallery/cantieri/cantiere4.png",
      "assets/gallery/cantieri/cantiere5.png",
      "assets/gallery/cantieri/cantiere6.png",
      "assets/gallery/cantieri/cantiere7.png",
    ],


    // Divani
    [
      "assets/gallery/divani/divani.jpeg",
      "assets/gallery/divani/divani2.jpg",
      "assets/gallery/divani/divani3.jpg",
      "assets/gallery/divani/divani4.jpg",
      "assets/gallery/divani/divani5.jpeg",
      "assets/gallery/divani/divano6.png",
      "assets/gallery/divani/divani7.jpeg",
      "assets/gallery/divani/divani8.jpeg",
      "assets/gallery/divani/divani9.jpeg",
      "assets/gallery/divani/divani10.jpeg",
      "assets/gallery/divani/divani11.jpeg",
      "assets/gallery/divani/divani12.mp4",
      "assets/gallery/divani/divani.mp4",
      "assets/gallery/divani/sedie.jpeg",
    ],


    // Abitazioni
    [
      "assets/gallery/abitazioni/casa.jpg",
      "assets/gallery/abitazioni/casa2.jpg",
      "assets/gallery/abitazioni/casa3.jpg",
      "assets/gallery/abitazioni/casa4.jpg",
      "assets/gallery/abitazioni/casa5.jpg",
      "assets/gallery/abitazioni/casa6.jpg",
      "assets/gallery/abitazioni/casa7.jpg",
      "assets/gallery/abitazioni/casa8.jpg",
      "assets/gallery/abitazioni/casa9.jpg",
      "assets/gallery/abitazioni/casa10.jpg",
      "assets/gallery/abitazioni/casa11.jpg",
      "assets/gallery/abitazioni/casa12.jpg",
      "assets/gallery/abitazioni/casa13.jpg",
      "assets/gallery/abitazioni/casa14.jpg",
      "assets/gallery/abitazioni/casa15.jpg",
      "assets/gallery/abitazioni/casa16.jpg",
      "assets/gallery/abitazioni/casa17.jpg",

      "assets/gallery/abitazioni/casa18.jpeg",
      "assets/gallery/abitazioni/casa19.jpeg",
      "assets/gallery/abitazioni/casa20.jpeg",
      "assets/gallery/abitazioni/casa21.jpeg",
      "assets/gallery/abitazioni/casa22.jpeg",
      "assets/gallery/abitazioni/casa23.jpeg",
      "assets/gallery/abitazioni/casa24.jpg",
      "assets/gallery/abitazioni/casa25.jpg",
      "assets/gallery/abitazioni/casa26.jpg",
      "assets/gallery/abitazioni/casa27.jpg",
      "assets/gallery/abitazioni/casa28.jpeg",
      "assets/gallery/abitazioni/casa29.jpeg",
      "assets/gallery/abitazioni/casa30.jpeg",
      "assets/gallery/abitazioni/casa31.jpeg",
      "assets/gallery/abitazioni/casa32.jpeg",
      "assets/gallery/abitazioni/casa33.jpeg",

      // Video
      "assets/gallery/abitazioni/casa.mp4",
      "assets/gallery/abitazioni/casa2.mp4",
      "assets/gallery/abitazioni/casa3.mp4",
      "assets/gallery/abitazioni/casa4.mp4",
      "assets/gallery/abitazioni/casa5.mp4",
      "assets/gallery/abitazioni/casa6.mp4",
      "assets/gallery/abitazioni/casa7.mp4",
      "assets/gallery/abitazioni/casa8.mp4",
    ],


    // Pulizia Incendi
    [
      "assets/gallery/incendi/incendio.mp4",
      "assets/gallery/incendi/incendio2.mp4",
      "assets/gallery/incendi/incendio4.mp4",
      "assets/gallery/incendi/incendio5.mp4",
      "assets/gallery/incendi/incendio6.mp4",

      "assets/gallery/incendi/incendio.jpeg",
      "assets/gallery/incendi/incendio2.jpeg",
      "assets/gallery/incendi/incendio3.jpeg",
      "assets/gallery/incendi/incendio4.jpeg",
      "assets/gallery/incendi/incendio5.jpeg",
      "assets/gallery/incendi/incendio6.jpeg",
      "assets/gallery/incendi/incendio7.jpeg",
      "assets/gallery/incendi/incendio8.jpeg",
      "assets/gallery/incendi/incendio9.jpeg",
      "assets/gallery/incendi/incendio10.jpeg",
      "assets/gallery/incendi/incendio11.jpeg",
      "assets/gallery/incendi/incendio12.jpeg",
      "assets/gallery/incendi/incendio13.jpeg",
      "assets/gallery/incendi/incendio14.jpeg",
    ],


    // Lucidatura Pavimenti
    [
      "assets/gallery/pavimenti/casa.jpg",
      "assets/gallery/pavimenti/casa2.jpg",
      "assets/gallery/pavimenti/casa3.jpg",
      "assets/gallery/pavimenti/casa7.jpg",
      "assets/gallery/pavimenti/casa8.jpg",
      "assets/gallery/pavimenti/casa10.jpg",
    ],


    // Vetrate
    [
      "assets/gallery/vetrate/vetrate.png",
      "assets/gallery/vetrate/vetrate2.png",
      "assets/gallery/vetrate/vetrate3.png",
      "assets/gallery/vetrate/vetrate4.png",
      "assets/gallery/vetrate/vetrate5.jpg",
      "assets/gallery/vetrate/vetrate6.jpeg",
    ],

    // Ambientale
    [
      "assets/gallery/ambiente/ambientale.jpeg",
      "assets/gallery/ambiente/ambientale2.jpeg",

      "assets/gallery/ambiente/ambientale.mp4",
      "assets/gallery/ambiente/ambientale2.mp4",
      "assets/gallery/ambiente/ambientale3.mp4",
      "assets/gallery/ambiente/ambientale4.mp4",
      "assets/gallery/ambiente/ambientale5.mp4",
    ],


    [
      "assets/gallery/camper/camper2.jpeg",
      "assets/gallery/camper/camper3.jpeg",
      "assets/gallery/camper/camper4.jpeg",
      "assets/gallery/camper/camper5.jpeg",
      "assets/gallery/camper/camper6.jpeg",

      "assets/gallery/camper/camper1.mp4",
      "assets/gallery/camper/camper3.mp4",
      "assets/gallery/camper/camper4.mp4",
      "assets/gallery/camper/camper5.mp4",
      "assets/gallery/camper/camper6.mp4",
      "assets/gallery/camper/camper7.mp4",
      "assets/gallery/camper/camper8.mp4",
      "assets/gallery/camper/camper9.mp4"
    ]
  ]

  selectTab(index: number) {
    this.selectedTab = index;
    this.currTab     = index;
  }
}
