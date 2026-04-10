import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}


  setTitle(title: string): void {
    this.title.setTitle(title);
  }


  updateMetaTag(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }


  updateSEO(data: { title: string, description?: string, keywords?: string, image?: string, siteName?: string, url?: string }) {
    
    // Adds Title, OG:Title
    this.setTitle(data.title);
    this.updateMetaTag('og:title', data.title);


    // Aggiungo Description, OG:Description
    if (data.description) {
      this.updateMetaTag('description', data.description);
      this.updateMetaTag('og:description', data.description);
    }

    // Aggiungo Site-name
    if (data.siteName) {
      this.updateMetaTag('og:site_name', data.siteName);
    }

    // Aggiungo Url
    if (data.url) {
      this.updateMetaTag('og:url', data.url);
    }

    // Twitter
    if (data.description) {
      this.updateMetaTag('twitter:title', data.title);
      this.updateMetaTag('twitter:description', data.description);
    }


    /* Generic */
    this.updateMetaTag('robots', 'all');
  }


  setStructuredData(document: Document): void {

    var exists = document.getElementById('structured-data');

    if (exists) {
      return;
    }


    var script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';


    script.text = JSON.stringify({
      "@id": "https://www.vaporchic.it/#business",
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "VaporChic",
      "image": [
        "https://www.vaporchic.it/assets/images/homeabout.webp",
        "https://www.vaporchic.it/assets/pubblicita/pubblicita.webp",
        "https://www.vaporchic.it/assets/pubblicita/pubblicita2.webp",
        "https://www.vaporchic.it/assets/backgrounds/homepage2.webp"
      ],
      "url": "https://www.vaporchic.it",
      "telephone": "+39 388 723 6826",
      "email": "vaporchicsiracusa@gmail.com",
      
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Sciascia, 34",
        "addressLocality": "Floridia",
        "addressRegion": "SR",
        "postalCode": "96014",
        "addressCountry": "IT"
      },
      
      "areaServed": {
        "@type": "Place",
        "name": "Siracusa e provincia"
      },
      
        "description": "Servizio di pulizia e sanificazione a vapore a domicilio per divani, materassi, auto e locali a Siracusa e provincia.",
        "sameAs": [
        "https://www.instagram.com/vaporchic_pulizia_",
        "https://www.facebook.com/p/VaporChic-Pulizia-e-Sanificazione-a-Vapore-61566351196944/",
        "https://www.youtube.com/@VAPORCHIC",
        "https://www.tiktok.com/@vaporchic"
      ],
      
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.09443",
        "longitude": "15.15088"
      },
      
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      ],
      
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "102"
      },
      
      
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di pulizia, Sanificazione e Disinfezione",
        "itemListElement": [
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia divani" }},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Autovetture"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Materassi"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Tappeti"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Imbarcazioni"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Locali"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Abitazioni"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Ambienti"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Camper"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Incendi"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Detailing"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Tende da Sole"}},
        {"@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pulizia Tappezzeria"}}
        ]
      }
    });


    document.head.appendChild(script);
  }

}
