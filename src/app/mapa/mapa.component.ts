import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TrackEventDirective } from '../directives/track-event.directive';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, NgxMapboxGLModule, TrackEventDirective],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: '#e6f7ff'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  template: `
    <div class="map-container my-4">
      <h3 class="mb-3">Encuéntranos</h3>

      <div class="row">
        <div class="col-md-8">
          <mgl-map
            [style]="'mapbox://styles/mapbox/streets-v11'"
            [zoom]="[13]"
            [center]="[-74.0060, 40.7128]"
            (mapLoad)="onMapLoad()"
          >
            <mgl-marker [lngLat]="[-74.0060, 40.7128]" (markerClick)="togglePopup()">
              <div class="marker-custom bg-danger text-white rounded-circle d-flex justify-content-center align-items-center" style="width: 30px; height: 30px; cursor: pointer;">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
            </mgl-marker>

            <mgl-popup *ngIf="showPopup" [lngLat]="[-74.0060, 40.7128]" (popupClose)="showPopup = false">
              <div class="p-2 text-dark">
                <strong>Sede Principal</strong><br/>
                Av. Bienestar 123
              </div>
            </mgl-popup>
          </mgl-map>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm mb-3">
            <div class="card-body text-center">
              <h5>Detalles de la Sede</h5>
              <button appTrackEvent="toggle-details-btn" class="btn btn-outline-primary mb-3" (click)="toggleDetails()">
                {{ isDetailsOpen ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>

              <div [@openClose]="isDetailsOpen ? 'open' : 'closed'" class="details-box p-3 rounded text-start">
                <p>Nuestra sede cuenta con las mejores instalaciones para tu bienestar:</p>
                <ul>
                  <li>Salas de Masajes</li>
                  <li>Piscinas Termales</li>
                  <li>Sauna y Turco</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    mgl-map {
      height: 400px;
      width: 100%;
      border-radius: 8px;
      display: block;
    }
  `]
})
export class MapaComponent {
  showPopup = false;
  isDetailsOpen = false;

  onMapLoad() {
    // Para depuración
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  toggleDetails() {
    this.isDetailsOpen = !this.isDetailsOpen;
  }
}
