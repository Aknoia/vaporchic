import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
      console.log('Contattaci Init');
  }

  ngOnInit() {
      const data = this.route.snapshot.data;

      this.title.setTitle(data['title']);
      this.meta.updateTag({
          name: 'description',
          content: data['description']
      });
  }
}
