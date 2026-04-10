import { Component } from '@angular/core';

@Component({
  selector: 'app-infobar',
  imports: [],
  templateUrl: './infobar.html',
  styleUrl: './infobar.css',
})

export class Infobar {

  // Stato Scorrimento 
  paused = false;

  items: string[] = [
    'Impresa di Pulizie',
    'Locali Commerciali',
    'Negozi',
    'Macchine',
    'Imbarcazioni',
    'Camper',
    'Divani',
    'Materassi',
    'Tappeti',
    'Tende da Sole',
    'Automotive',
    'tappezzeria',
    'Abitazioni',
    'Animali',
    'Ambienti',
    'Incendi'
  ]

  
  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }
}
