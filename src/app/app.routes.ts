import { Routes } from '@angular/router';

import { Homepage } from './features/homepage/homepage.module';
import { Gallery } from './features/gallery/gallery';
import { Contactus } from './features/contactus/contactus';
import { Services } from './features/services/services';
import { Aboutus } from './features/aboutus/aboutus';
import { Servizio } from './features/servizio/servizio';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        data: { 
            title: 'Home - VaporChic',
            description: 'Benvenuti a VaporChic, il tuo servizio di pulizia e sanificazione a vapore professionale per Locali, Autovetture e Tappezzerie. Scopri i nostri servizi di alta qualità!' 
        }
    },

    {
        path: 'home',
        component: Homepage,
        data: { 
            title: 'Home - VaporChic',
            description: 'Benvenuti a VaporChic, il tuo servizio di pulizia a vapore professionale per Locali, Autovetture e Tappezzerie. Scopri i nostri servizi di alta qualità!' 
        }
    },
 
    {
        path: 'gallery',
        component: Gallery,
        data: { 
            title: 'Galleria - VaporChic',
            description: 'Esplora la galleria di VaporChic per vedere i nostri servizi di pulizia a vapore professionale in azione su Locali, Autovetture e Tappezzerie.' 
        }
    },

    {
        path: 'contatti',
        component: Contactus,
        data: { 
            title: 'Contattaci - VaporChic',
            description: 'Mettiti in contatto con VaporChic per informazioni sui nostri servizi di pulizia a vapore professionale. Siamo qui per aiutarti!' 
        }
    },

    {
        path: 'chi-siamo',
        component: Aboutus,
        data: { 
            title: 'Chi Siamo',
            description: 'Scopri di più su VaporChic e sul suo team dedicato che lavora per offrirti servizi di alta qualità nel settore della pulizia a vapore.' 
        }
    },




    {
        path: 'servizi',
        component: Services,
        data: { 
            title: 'Servizi di Pulizia a Vapore',
            description: 'Esplora i nostri servizi di pulizia a vapore professionale a Siracusa e Provincia' 
        }
    },


    {
        path: 'servizio/:id',
        component: Servizio,
        data: { 
            title: 'Servizo di Pulizia a Vapore',
            description: 'Esplora i nostri servizi di pulizia a vapore professionale a Siracusa e Provincia' 
        }
    }
];
