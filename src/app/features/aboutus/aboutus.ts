import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})

export class Aboutus {

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
    console.log('About Us Init');
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
