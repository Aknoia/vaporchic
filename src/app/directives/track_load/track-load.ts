import { Directive, ElementRef, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading';

@Directive({
  selector: '[appTrackLoad]'
})
export class TrackLoad implements OnInit {

  constructor(private el: ElementRef, private loadingService: LoadingService) { }

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    this.loadingService.registerAsset();

    element.onload = () => {
      this.loadingService.assetLoaded();
    }

    element.onloadeddata = () => {   
      this.loadingService.assetLoaded();
    }
  }
}
