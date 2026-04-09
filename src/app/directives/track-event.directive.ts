import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { clickElement } from '../store/tracker.actions';

@Directive({
  selector: '[appTrackEvent]',
  standalone: true
})
export class TrackEventDirective {
  // Recibe la etiqueta de tracking mediante un Input
  @Input('appTrackEvent') trackingTag: string = 'default-tag';

  // Por inyección de dependencias recibimos el ElementRef y el Store
  constructor(private el: ElementRef, private store: Store) {
    // Si quisieramos inspeccionar el elemento del DOM al iniciar:
    // console.log('Directiva de tracking conectada al elemento:', this.el.nativeElement);
  }

  // Nos suscribimos a los eventos del DOM para el click
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // Despachar a NgRx usando el string capturado
    if (this.trackingTag) {
      this.store.dispatch(clickElement({ tag: this.trackingTag }));
      console.log(`Tracking Tag Registrado: ${this.trackingTag}`);
    }
  }
}
