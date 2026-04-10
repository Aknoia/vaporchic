import { Routes } from '@angular/router';

import { Homepage } from './features/homepage/homepage.module';
import { Gallery } from './features/gallery/gallery';
import { Contactus } from './features/contactus/contactus';
import { Aboutus } from './features/aboutus/aboutus';
import { Servizio } from './features/servizio/servizio';

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        data: { 
            title: 'VaporChic | Pulizia e Sanificazione a Vapore Siracusa',
            description: 'Servizio professionale di pulizia e sanificazione a vapore a domicilio a Siracusa. Lavaggio, Sanificazione e Disinfezione divani, materassi, autovetture, barche, case vacanze, e locali. Preventivo veloce!',
            siteName: 'Pulizia e Lavaggio a Vapore a Domicilio Siracusa.',
            keywords: 'Vaporchic Pulizia Lavaggio Sanificazione, Locali Commerciali, Autovetture, Tappezzerie, Siracusa, Provincia, Domicilio, Servizi Professionali, Qualità',
            url: 'https://www.vaporchic.it',
            image: ''
        }
    },
 
    {
        path: 'gallery',
        component: Gallery,
        data: { 
            title: 'VaporChic | Galleria',
            description: 'Esplora la galleria di VaporChic per vedere i nostri servizi di pulizia a vapore professionale in azione su Locali, Autovetture e Tappezzerie.',
            siteName: 'Pulizia e Lavaggio a Vapore a Domicilio Siracusa.',
            keywords: 'Galleria Foto Lavori PuLizia Lavaggio Sanificazione, Locali Commerciali, Autovetture, Tappezzerie, Siracusa, Provincia, Domicilio, Servizi Professionali, Qualità',
            url: 'https://www.vaporchic.it',
            image: ''
        }
    },

    {
        path: 'contatti',
        component: Contactus,
        data: { 
            title: 'VaporChic | Contattaci',
            description: 'Mettiti in contatto con VaporChic per informazioni sui nostri servizi di pulizia a vapore professionale. Siamo qui per aiutarti!',
            siteName: 'Pulizia e Lavaggio a Vapore a Domicilio Siracusa.',
            keywords: 'Pulizia Lavaggio Sanificazione',
            url: 'https://www.vaporchic.it',
            image: ''
        }
    },

    {
        path: 'chi-siamo',
        component: Aboutus,
        data: { 
            title: 'VaporChic | Chi Siamo',
            description: 'Scopri di più su VaporChic e sul suo team dedicato che lavora per offrirti servizi di alta qualità nel settore della pulizia a vapore.',
            siteName: 'Pulizia e Lavaggio a Vapore a Domicilio Siracusa.',
            keywords: 'Pulizia Lavaggio Sanificazione',
            url: 'https://www.vaporchic.it',
            image: ''
        }
    },

    {
        path: 'servizio/:id',
        component: Servizio,
        data: { 
            title: 'Servizi di Pulizia e Sanificazione per ',
            description: 'Servizi di Pulizia e Sanificazione a Vapore a Siracusa e Provincia per ',
            siteName: 'Pulizia e Lavaggio a Vapore a Domicilio Siracusa.',
            keywords: 'Pulizia Lavaggio Sanificazione',
            url: 'https://www.vaporchic.it',
            image: ''
        }
    }
];
