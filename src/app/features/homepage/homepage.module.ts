import { Component, ElementRef, ViewChild, signal, ChangeDetectorRef } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs'
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterLink } from "@angular/router";
import { interval, Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { AnimateOnScrollDirective } from "../animateo_on_scroll/animate_on_scroll";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: 'homepage.html',
    styleUrls: ['homepage.css'],
    imports: [MatIconModule, MatSidenavModule, CommonModule, MatTabsModule, RouterLink, AnimateOnScrollDirective],
})


export class Homepage {
    /* Gestione Animazione Carosello Sezione Lavori*/
    visible = signal(false);
    leaving = signal(false);

    show() {
        this.visible.set(true);
    }

    hide() {
        this.leaving.set(true);

        setTimeout(() => {
            this.visible.set(true);
            this.leaving.set(false);

            this.updatePages();
        }, 400); // deve combaciare con il CSS
    }




    /* Gestione Servizi */ 
    visiblePages: any[] = [];
    itemsPerRow = 2;
    currRow     = 0;
    
    /*pagesDesktop = [
        [
            {
                img: '',
                gif: '',
                video: 'assets/video/autovetture.mp4',
                title: 'Servizi per Autovetture',
                descr1: 'Solo esterno ad Acqua a partire da 20,00 €',
                descr2: 'Detailing Interno a partire da 50€',
                descr3: 'Sanificazione interna completa a partire da 150,00 €',
                altImg: 'Servizi per Autovetture',
                altInfo: 'Informazioni Autovetture',
                hasImg: false,
                hasGif: false,
                hasVideo: true,
            },

            {
                img: '',
                gif: '',
                video: 'assets/video/divani.mp4',
                title: 'Servizi per Divani, Tappeti e Materassi',
                descr1: 'Pulizia di sterilizzazione e sanificazione a Domicilio',
                descr2: 'Lavaggio tappeti con Ritiro e Consegna a partire da 15,90mq',
                descr3: 'Lavaggio Standard Chic a partire da 70,00 €',
                altImg: 'Servizi per Divani, Tappeti e Materassi',
                altInfo: 'Informazioni Divani',
                hasImg: false,
                hasGif: false,
                hasVideo: true,
            },

            {
                img: '',
                gif: 'assets/video/localicommerciali.gif',
                video: '',
                title: 'Servizi per Locali Commerciali e Negozi',
                descr1: 'Pulizia ordinaria Solarium - Pub - Ristoranti - Negozi ',
                descr2: 'Pulizia vetrine locali commerciali da 5,90 €',
                descr3: '',
                altImg: 'Servizi per Locali Commerciali e Negozi',
                altInfo: 'Informazioni Locali Commerciali',
                hasImg: false,
                hasGif: true,
                hasVideo: false,
            }
        ],

        [
            {
                img: '',
                gif: '',
                video: 'assets/video/barche.mp4',
                title: 'Servizi per Imbarcazioni',
                descr1: 'Pulizie e Sanificazioni a Vapore e con Ozono',
                descr2: 'Pulizia dettagliata di Interni ed Esterni',
                descr3: 'Per Yacht e imbarcazioni di qualsiasi tipo',
                altImg: '',
                altInfo: 'Informazioni Imbarcazioni',
                hasImg: false,
                hasGif: false,
                hasVideo: true,
            },

            {
                img: 'assets/images/tende.png',
                gif: '',
                video: '',
                title: 'Servizi per Tende da Sole e Gazebi',
                descr1: 'Pulizia a Domicilio di Tende da Sole, Ombrelloni, Gazebi e Serrande',
                descr2: 'Processo Completo con Vapore secco a 180°.',
                descr3: 'Risultato Eccellente anche per Macchie Ostinate',
                altImg: 'Servizi per Tende da Sole e Gazebi',
                altInfo: 'Informazioni Tende da Sole',
                hasImg: true,
                hasGif: false,
                hasVideo: false,
            },

            {
                img: 'assets/images/cantieri.png',
                gif: '', 
                video: '',
                title: 'Servizi per Cantieri',
                descr1: 'Per la Pulizia di fine Cantiere con il nostro Team Professionale',
                descr2: 'Ispezione prevista prima dell\'inizio dei lavori',
                descr3: 'Pulizia approfondita divisa in vari step per ogni esigenza del Costruttore',
                altImg: 'Servizi per Cantieri',
                altInfo: 'Informazioni Cantieri',
                hasImg: true,
                hasGif: false,
                hasVideo: false,
            }
        ],

        [
            {
                img: 'assets/images/ozono.png',
                gif: '', 
                video: '',
                title: 'Servizo Sanificazione Ambientale',
                descr1: 'Disinfezione da Virus, Batteri e Funghi',
                descr2: 'Disinfezioni Locali con Ozono',
                descr3: 'Neubulizzazione per l\'eliminazione di Germi e Batteri',
                altImg: 'Servizi per Sanificazione Ambientale',
                altInfo: 'Informazioni Sanificazione Ambientale',
                hasImg: true,
                hasGif: false,
                hasVideo: false,
            },

            {
                img: 'assets/images/pavimento.png',
                gif: '', 
                video: '',
                title: 'Servizi per Pavimentazione',
                descr1: 'Pulizia di Gres Porcellanato, Marmo, Cemento e Granito',
                descr2: 'Eliminazione dei Graffi tramite Abrasivi Diamantati',
                descr3: 'Lucidatura Impeccabile e Durevole',
                altImg: 'Servizi per Pavimentazione',
                altInfo: 'Informazioni Pavimentazione',
                hasImg: true,
                hasGif: false,
                hasVideo: false,
            },

            {
                img: 'assets/images/vetri.png',
                gif: '', 
                video: '',
                title: 'Servizio per Vetrare e Finestre',
                descr1: 'Pulizia di Vetrare per Negozi, Uffici e Abitazioni',
                descr2: 'Sopralluogo Necessario per Preventivo Personalizzato',
                descr3: 'Risultato Eccellente e Durevole',
                altImg: 'Servizi per Vetrare e Finestre',
                altInfo: 'Informazioni Vetrare e Finestre',
                hasImg: true,
                hasGif: false,
                hasVideo: false,
            }
        ]
    ]*/

        pagesDesktop = [
            {
                video: "assets/video/autovetture.mp4",
                title: "Servizi per Autovetture",
                link: "/servizio/0",
            },

            {
                video: "assets/gallery/camper/camper6.mp4",
                title: "Servizi per Camper",
                link: "/servizio/9",
            },

            {
                video: "assets/video/barche.mp4",
                title: "Servizi per Imbarcazioni e Yacht",
                link: "/servizio/1",
            },
        
        
            {
                video: "assets/video/divani.mp4",
                title: "Servizi per Divani e Poltrone",
                link: "/servizio/2",
            },

            {
                video: "assets/gallery/materassi/materassi1.mp4",
                title: "Servizi per Materassi",
                link: "/servizio/3",
            },

            {
                video: "assets/gallery/tappeti/tappeti2.mp4",
                title: "Servizi per Tappeti",
                link: "/servizio/4",
            },

            {
                video: "assets/video/locali2.mp4",
                title: "Servizi per Locali, Uffici e Negozi",
                link: "/servizio/5",
            },
        
        
            {
                video: "assets/gallery/abitazioni/casa6.mp4",
                title: "Servizi per Abitazioni, Villette, Case Vacanze e Borghi",
                link: "/servizio/6",
            },

            {
                video: "",
                title: "Servizi per Animali",
                link: "/servizio/7",
            },

            {
                video: "assets/gallery/ambiente/ambientale.mp4",
                title: "Sanificazione Ambientale",
                link: "/servizio/8",
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
      "descr2": "Non ha perso un attimo per venire a salvare il nostro divano, che è tornato come nuovo",
      "descr3": "è stata la prima volta per noi, ma sicuramente la prima di una lunga serie",
      "link": "https://share.google/HEh1vIx3BcG3M3SIZ",
      "rating": 5,
    },

    {
      "author": "Lino Barreca",
      "data": "7 Mesi fa",
      "title": "Ho avuto la fortuna di conoscere la VaporChic",
      "descr1": "perché la sera prima in casa ho avuto un incendio in cucina, tutta la casa piena di fuligine",
      "descr2": "Con la sua squadra di 7 persone mi hanno ripulito casa in ogni angolo dalla fuligine e sporco con macchinari e prodotti professionali con sanificazione finale",
      "descr3": " E in serata consegnata come promesso. Consigliato vivamente,",
      "link": "https://maps.app.goo.gl/tHbs7Whvdroqjo9X6",
      "rating": 5
    },

    {
      "author": "Sara Rubera",
      "data": "8 Mesi fa",
      "title": "100/100",
      "descr1": "Sono rimasta estremamente soddisfatta del servizio di pulizia della tappezzeria, la mia macchina è stata riportata a nuovo",
      "descr2": "Il servizio è stato non solo professionale, ma anche estremamente disponibile e cordiale. ",
      "descr3": "Consiglio assolutamente questo servizio a tutti! ",
      "link": "https://share.google/I08PRoyg7PbNP6SH8",
      "rating": 5
    },
    ]




    /* Gestione Showcase */
    showcaseInter: Subscription | undefined;
    activeIndexes = [signal(0), signal(0), signal(0), signal(0)];
    showcases: string[][] = [
        // Pulizia
        // 1) Case - Locali - Cantieri
        [
            "assets/gallery/locali/locali4.png",
            "assets/images/cantieri.png",
            "assets/gallery/locali/locali3.png",
            "assets/gallery/locali/locali5.png",
            "assets/gallery/locali/locali6.png",
            "assets/gallery/locali/locali7.png",
            "assets/gallery/locali/locali8.png",
            "assets/gallery/locali/locali9.png",
            "assets/gallery/locali/locali10.png",
            "assets/gallery/locali/locali11.gif",
        ],

        // Lavaggio
        // Autovetture - Camper - Imbarcazioni
        [
            "assets/gallery/imbarcazioni/imbarcazioni4.png",
            "assets/gallery/imbarcazioni/imbarcazioni6.png",
            "assets/gallery/imbarcazioni/imbarcazioni2.gif",
            "assets/gallery/autovetture/auto6.png",
            "assets/gallery/autovetture/auto4.png",
            "assets/gallery/autovetture/auto9.png",
            "assets/gallery/autovetture/auto10.png",
            "assets/gallery/autovetture/auto11.png",
            "assets/gallery/autovetture/auto12.png",
        ],

        // Sanificazione
        // Tappeti - Materassi - Divani- Tende da Sole
        [
            "assets/gallery/tappeti/tappeti2.png",
            "assets/gallery/tappeti/tappeti3.png",
            "assets/gallery/tappeti/tappeti6.png",
            "assets/gallery/tappeti/tappeti7.png",
            "assets/gallery/materassi/materassi4.png",
            "assets/gallery/materassi/materassi10.png",
            "assets/gallery/materassi/materassi11.png",
            "assets/gallery/tende/tende3.png",
        ],

        // Disinfezione
        // Ambientale 
        [
            "assets/images/ambientale1.png",
            "assets/images/ozono.png",
            "assets/images/disinfezione2.png",
            "assets/images/disinfezione3.png",
        ]
    ]

    setActive(boxIndex: number, dotIndex: number) {
        this.activeIndexes[boxIndex].set(dotIndex);
    }




    constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private title: Title, private meta: Meta, private ref: ChangeDetectorRef) {
        console.log('Homepage INIT');
        this.show();
    }

    ngOnInit() {
        // Calcolo quanti servizi mostrare per pagina a seconda dello schermo
        this.breakpointObserver.observe(
            [
                '(max-width: 767px)',                           // mobile
                '(min-width: 768px) and (max-width: 1023px)',   // tablet
                '(min-width: 1024px)'                           // desktop
            ]
        ).subscribe(result => {

            if (result.breakpoints['(max-width: 767px)']) {
                this.itemsPerRow = 1;
            } else if (result.breakpoints['(min-width: 768px) and (max-width: 1023px)']) {
                this.itemsPerRow = 2;
            } else {
                this.itemsPerRow = 2;
            }

            this.updatePages();
        });


        this.showcaseInter = interval(4000).subscribe(() => {
            this.nextServiceImg(0);
            this.nextServiceImg(1);
            this.nextServiceImg(2);
            this.nextServiceImg(3);
        });


        // Metadata
        const data = this.route.snapshot.data;
        this.title.setTitle(data['title']);
        this.meta.updateTag({
            name: 'description',
            content: data['description']
        });


        this.visiblePages = []
        this.visiblePages.push(this.pagesDesktop.flat());
    }

    ngOnDestroy() {
        console.log('On Destroy');

        if (this.showcaseInter) {
            this.showcaseInter.unsubscribe();
        }
    }

    


    // Cambia Pagine Servizi
    updatePages() {
        // appiattisce l'array 3D → 1D
        const flatPages = this.pagesDesktop.flat();


        // raggruppa in base agli itemsPerRow
        this.visiblePages = [];
        for (let i = this.currRow * this.itemsPerRow; i < (this.currRow * this.itemsPerRow + this.itemsPerRow); i++) {
            this.visiblePages.push(flatPages[i])   
        }
    }


    next() {
        if ((this.currRow * this.itemsPerRow + this.itemsPerRow) < this.pagesDesktop.flat().length) {
            this.hide();

            this.currRow++;
        }

        else {
            this.currRow = 0;
        }
    }


    prev() {
        if (this.currRow - 1 >= 0) {
            this.hide();

            this.currRow -= 1;            
        }
    }



    // Cambia Immagine Sezione Showcase
    nextServiceImg(boxIndex: number) {
        // Prendo l'indice dell'immagine attuale
        let currBoxImg = this.activeIndexes[boxIndex];

        const newIndexes = [...this.activeIndexes];

        // Se sono all'ultima immagine 
        // Allora ritorno alla prima
        if (currBoxImg() == this.showcases[boxIndex].length - 1) {
            this.activeIndexes[boxIndex].set(0);
        }

        else {
            this.activeIndexes[boxIndex].set(currBoxImg() + 1);
        }
    }

    prevServiceImg(boxIndex: number) {
        // Prendo l'indice dell'immagine attuale
        let currBoxImg = this.activeIndexes[boxIndex];

        // Se sono alla prima immagine 
        // Allora vado all'ultima
        if (currBoxImg() == 0) {
            this.activeIndexes[boxIndex].set(this.showcases[boxIndex].length - 1);
        }

        else {
            this.activeIndexes[boxIndex].set(currBoxImg() - 1);
        }
    }



    scrollToServices() {
        const servicesSection = document.getElementById('section-services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToAboutUs() { 
        const aboutUsSection = document.getElementById('section-about-us');
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
