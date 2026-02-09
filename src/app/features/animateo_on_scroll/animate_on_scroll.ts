import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Inject,
  Input,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

type AnimationType =
  | 'fade_up'
  | 'fade_left'
;


@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})

export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {

  @Input('animateOnScroll') animation: AnimationType = 'fade_left';
  @Input() once = true;


  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {
    // ✅ input ora è disponibile
    this.animation = `${this.animation || 'fade_left'}`;
  }


  ngAfterViewInit(): void {
    // STOP se siamo lato server
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    //  Fallback se non supportato
    if (!('IntersectionObserver' in window)) {
      this.el.nativeElement.classList.add('animate_' + this.animation);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          

          this.el.nativeElement.getBoundingClientRect();

            console.log(this.animation)
            //this.el.nativeElement.classList.add('animate_directive');
            this.el.nativeElement.classList.add('animate_' + `${this.animation}`);
          
            console.log(this.el.nativeElement.classList);

          this.observer.disconnect(); // anima UNA volta
        }
      },
      {
        threshold: 0.2
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}