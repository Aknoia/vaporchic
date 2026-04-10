import { Component, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit, Inject } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule, DOCUMENT } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs'
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { SeoService } from "@app/services/seoSrv/seo";
import { TrackLoad } from "../../directives/track_load/track-load";

import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: 'homepage.html',
    styleUrls: ['homepage.css'],
    imports: [MatIconModule, MatSidenavModule, CommonModule, MatTabsModule, TrackLoad, RouterLink] ,
})


export class Homepage implements AfterViewInit {
    @ViewChild('mainVideo') video!: ElementRef<HTMLVideoElement>;

    /* Gestione Showcase Servizi */ 
    currIndex     = 0;
    pagesDesktop = [
        // Auto, Moto, Scooter
        {
            video: "assets/video/autovetture.webm",
            title: "Servizi per Autovetture",
            link: "/servizio/autovetture/",
            
            sub1Text: 'Lavaggio Esterno',
            sub1Link: '/servizio/autovetture/',
            sub1Frag: 'section-2',

            sub2Text: 'Car Detailing',
            sub2Link: '/servizio/cardetailing/',
            sub2Frag: 'section-title',

            sub3Text: 'Prezzi',
            sub3Link: '/servizio/autovetture/',
            sub3Frag: 'section-plans',
        },

        // Camper, Van, Furgoni
        {
            video: "assets/gallery/camper/camper6.webm",
            title: "Servizi per Camper",
            link: "/servizio/camper/",

            sub1Text: 'Lavaggio Interno',
            sub1Link: '/servizio/camper/',
            sub1Frag: 'section-title',

            sub2Text: 'Prezzi',
            sub2Link: '/servizio/camper/',
            sub2Frag: 'section-plans',
        },

        // Imbarcazioni, Yacht
        {
            video: "assets/video/barche.webm",
            title: "Servizi per Imbarcazioni e Yacht",
            link: "/servizio/imbarcazioni/",
        },
    
        // Divani, Poltrone, Sedie
        {
            video: "assets/video/divani.webm",
            title: "Servizi per Divani e Poltrone",
            link: "/servizio/divani/",

            sub1Text: 'Lavaggio a Vapore',
            sub1Link: '/servizio/divani/',
            sub1Frag: 'section-title',

            sub2Text: 'Sanificazione Sedie',
            sub2Link: '/servizio/divani/',
            sub2Frag: 'section-5',

            sub3Text: 'Prezzi',
            sub3Link: '/servizio/divani/',
            sub3Frag: 'section-plans',
        },

        //  Materassi
        {
            video: "assets/gallery/materassi/materassi.mp4", //materassi1.webm
            title: "Servizi per Materassi",
            link: "/servizio/materassi/",

            sub1Text: 'Trattamento AntiAcaro',
            sub1Link: '/servizio/materassi/',
            sub1Frag: 'section-title',

            sub2Text: 'Trattamento Ozono',
            sub2Link: '/servizio/materassi/',
            sub2Frag: 'section-2',

            sub3Text: 'Prezzi',
            sub3Link: '/servizio/materassi/',
            sub3Frag: 'section-plans',
        },

        // Tappeti
        {
            video: "assets/gallery/tappeti/tappeti2.webm",
            title: "Servizi per Tappeti",
            link: "/servizio/tappeti/",

            sub1Text: 'Pulizia a Vapore Secco',
            sub1Link: '/servizio/tappeti/',
            sub1Frag: 'section-title',

            sub2Text: 'Prezzi',
            sub2Link: '/servizio/tappeti/',
            sub2Frag: 'section-plans',
        },

        // Locali, Uffici, Negozi
        {
            video: "assets/video/locali2.webm",
            title: "Servizi per Locali, Uffici e Negozi",
            link: "/servizio/locali/",

            sub1Text: 'Pulizia Vetrate',
            sub1Link: '/servizio/locali/',
            sub1Frag: 'section-2',

            sub2Text: 'Pulizia Cappe Cucina',
            sub2Link: '/servizio/locali/',
            sub2Frag: 'section-2'

        },
    
    
        // Abitazioni, Villette, Case Vacanze, Borghi
        {
            video: "assets/gallery/abitazioni/casa4.webm",
            title: "Servizi per Abitazioni, Villette, Case Vacanze e Borghi",
            link: "/servizio/abitazioni/",

            sub1Text: 'Pulizia Case Vacanze',
            sub1Link: '/servizio/casevacanza/',
            sub1Frag: 'section-title',

            sub2Text: 'Pulizia Grondaie',
            sub2Link: '/servizio/abitazioni/',
            sub2Frag: 'section-4',
        },


        // Sanificazione Ambientale, Disinfestazione, Derattizzazione
        {
            video: "assets/gallery/ambiente/ambientale4.webm",
            title: "Sanificazione Ambientale",
            link: "/servizio/ambienti/",

            sub1Text: 'Cimici da Letto',
            sub1Link: '/servizio/ambienti/',
            sub1Frag: 'section-2',

            sub2Text: 'Auto, Abitazioni, Locali',
            sub2Link: '/servizio/ambienti/',
            sub2Frag: 'section-4',
        },

        // Incendi, Fuligine, Odori
        {
            video: "assets/gallery/incendi/incendio5.webm",
            title: "Incendi",
            link: "/servizio/incendi/",            
        }
    ]




    /* Gestione Recensioni */ 
    currRec = 0;
    recensioni = [
            {
                "author": "Clarissa",
                "data": "2 Settimane fa",
                "title": "Con una sola parola, Magico!",
                "descr1": "Possiamo dire anche Gentile, Disponibile, Professionale e Competente",
                "link": "https://share.google/HEh1vIx3BcG3M3SIZ",
                "rating": 5,
            },

            {
                "author": "Lino Barreca",
                "data": "7 Mesi fa",
                "title": "Ho avuto la fortuna di conoscere la VaporChic",
                "descr1": "perché la sera prima in casa ho avuto un incendio in cucina, tutta la casa piena di fuligine",
                "link": "https://maps.app.goo.gl/tHbs7Whvdroqjo9X6",
                "rating": 5
            },

            {
                "author": "Sara Rubera",
                "data": "8 Mesi fa",
                "title": "100/100",
                "descr1": "Sono rimasta estremamente soddisfatta del servizio di pulizia della tappezzeria, la mia macchina è stata riportata a nuovo",
                "link": "https://share.google/I08PRoyg7PbNP6SH8",
                "rating": 5
            },
    
    ]



    // Gestione Slider Immagini
    private timerSub?: Subscription;
    startIndex = 0;
    images = [
        {
            "img": "assets/backgrounds/homepage1.webp",
            "title": "Camper",
            "link": "/servizio/camper",
        },
        {
            "img": "assets/gallery/abitazioni/casa32.webp",
            "title": "Abitazioni",
            "link": "/servizio/abitazioni",
        },
        {
            "img": "assets/backgrounds/homepage2.webp",
            "title": "Interno ed Esterno Auto",
            "link": "/servizio/autovetture",
        },
        {
            "img": "assets/gallery/locali/locali14.webp",
            "title": "Locali Commerciali",
            "link": "/servizio/camper",
        },
        {
            "img": "assets/backgrounds/homepage3.webp",
            "title": "Divani",
            "link": "/servizio/divani",
        },
        {
            "img": "assets/gallery/incendi/incendio7.webp",
            "title": "Incendi e Fuligine",
            "link": "/servizio/incendi",
        },
        {
            "img": "assets/gallery/materassi/materassi11.webp",
            "title": "Materassi",
            "link": "/servizio/materassi",
        },
        {
            "img": "assets/gallery/pavimenti/casa7.webp",
            "title": "Lucidatura Pavimenti",
            "link": "/servizio/puliziastraordinaria",
        },
        {
            "img": "assets/gallery/tappeti/tappeti13.webp",
            "title": "Tappeti",
            "link": "/servizio/tappeti",
        },
        {
            "img": "assets/gallery/tende/tende6.webp",
            "title": "Tende da Sole",
            "link": "/servizio/tendedasole",
        },

        {
            "img": "assets/gallery/vetrate/vetrine.webp",
            "title": "Vetrine",
            "link": "/servizio/locali",
        },

        {
            "img": "assets/gallery/imbarcazioni/imbarcazioni4.webp",
            "title": "Imbarcazioni",
            "link": "/servizio/imbarcazioni",
        },
    ];

    nextImage() {
        if (this.startIndex < this.images.length - 4) {
            this.startIndex++;
        } else {
            this.startIndex = 0; // torna all'inizio se arrivo alla fine
        }
        
        this.ref.markForCheck();
    }

    prevImage() {
        if (this.startIndex > 0) {
            this.startIndex--;
        } else {
            this.startIndex = this.images.length - 5; // vai alla fine se arrivo all'inizio
        }

        this.ref.markForCheck();
    }

    get translateValue() {
        return `translateX(-${this.startIndex * 26}%)`;
    }


    get translateValueTablet() {    
        return `translateX(-${this.startIndex * 101}%)`;
    }

    get translateValueMobile() {
        return `translateX(-${this.startIndex * 106}%)`;
    }

    constructor(private route: ActivatedRoute, 
                private title: Title, 
                private meta: Meta, 
                private ref: ChangeDetectorRef, 
                private seo: SeoService,
                @Inject(DOCUMENT) private document: Document
    ) {
        console.log('Homepage INIT');
    }



    ngOnInit() {
        // Metadata
        const data = this.route.snapshot.data;

        this.seo.updateSEO({
            title: data['title'],
            description: data['description'],
            siteName: data['siteName'],
            keywords: data['keywords'],
            url: data['url'],
            image: data['image']
        });

        this.seo.setStructuredData(this.document);

        this.timerSub = interval(3000).subscribe(() => {
            console.log('NEXT');
            this.nextImage();
        });
    }

    ngAfterViewInit() {
        this.video.nativeElement.muted = true;
        
        try {
          this.video.nativeElement.play();
        }
        catch (error){

        }
    }
    

    ngOnDestroy() {
        console.log('On Destroy');
    
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
    }


    /* Gestione Showcase */
    nextShowcase() {
        this.currIndex = (this.currIndex + 1) % this.pagesDesktop.length;
        this.ref.markForCheck();
    }


    prevShowcase() {
        this.currIndex = (this.currIndex - 1 + this.pagesDesktop.length) % this.pagesDesktop.length;
        this.ref.markForCheck();
    }


    /* Gestione Recensioni */
    nextRecensione() {
        this.currRec = (this.currRec + 1) % this.recensioni.length;
        this.ref.markForCheck();
    }


    prevRecensione() {
        this.currRec = (this.currRec - 1 + this.recensioni.length) % this.recensioni.length;
        this.ref.markForCheck();
    }


    // Scroll Elemento in Viewport
    scrollTo(el: HTMLElement) {
        var navbar = document.querySelector('.navbar__wrapper') as HTMLElement;

        window.scrollTo({ top: el.offsetTop - navbar.offsetHeight - 50, behavior: 'smooth' });
    }
}
