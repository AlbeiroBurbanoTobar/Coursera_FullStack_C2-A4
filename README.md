# Centro de Relajación y SPA – Módulo 4 Angular

Proyecto Angular 17 que implementa los 10 requisitos del Módulo 4 del curso Full Stack de Coursera centrado en **Pruebas, Animaciones, Directivas y Mapas**.

---

## Cómo correr el proyecto

Este proyecto incluye un servidor local Express, una aplicación Angular con Redux, Mapas y Pruebas Automatizadas.

### 1. Iniciar el Backend (API)
Abre una terminal y ejecuta:
```bash
cd backend
npm install
npm start
```
El API correrá en `http://localhost:3000/api`.

### 2. Iniciar el Frontend (Angular)
En una segunda terminal desde la raíz del proyecto, ejecuta:
```bash
npm install --legacy-peer-deps
npm start
```
Navega a `http://localhost:4200/`.

---

## Requisitos del Módulo 4 – Dónde encontrarlos

### Requisito 1 – Instalación de Mapas Mapbox
Se han instalado los paquetes `ngx-mapbox-gl`, `mapbox-gl` y `@types/mapbox-gl@0.49.0`.
- Verificación: `npm ls ngx-mapbox-gl`

### Requisito 2 – Marcador y Popover en el Mapa
Existe un componente de mapa que muestra un marcador; al hacer clic, se despliega un mensaje/popover con información de la sede.
- Archivo: `src/app/mapa/mapa.component.ts`

### Requisito 3 – Animaciones de Angular
El componente de mapa incluye una sección de detalles que se expande/contrae utilizando `@angular/animations` cuando cambia la propiedad `isDetailsOpen`.
- Archivo: `src/app/mapa/mapa.component.ts`

### Requisito 4 y 5 – Directiva Personalizada y Registro de Clicks (DI ElementRef)
Se creó la directiva `TrackEventDirective` que recibe por inyección de dependencias la referencia al `ElementRef` y se suscribe a los eventos del DOM (`click`) usando `@HostListener`.
- Archivo: `src/app/directives/track-event.directive.ts`

### Requisito 6 – Uso de Tracking Tags en Templates
La directiva se utiliza en varios componentes (como `HomeComponent` y `MapaComponent`) leyendo "tracking tags" personalizados para identificar la actividad del usuario.
- Archivo: `src/app/home/home.component.ts`

### Requisito 7 – Actualización Reactiva con Redux
Se implementó el estado `tracker` en Redux que actualiza la cuenta de clicks por tag. Los contadores se ven en tiempo real en un panel flotante en la interfaz.
- Archivos: `src/app/store/tracker.reducer.ts`, `src/app/app.component.html`

### Requisito 8 – Pruebas Unitarias Jasmine para Reducers
Se crearon pruebas unitarias con Jasmine para asegurar que los reductores del tracker sean funciones puras y manejen correctamente el estado.
- Archivo: `src/app/store/tracker.reducer.spec.ts`

### Requisito 9 – Pruebas de Cypress (E2E)
Se integró Cypress y se crearon al menos 3 tests propios que validan la navegación, el renderizado del mapa y la funcionalidad del tracking.
- Archivo: `cypress/e2e/app.cy.ts`

### Requisito 10 – Integración con CircleCI
Se configuró el archivo de integración continua para ejecutar las pruebas y el build automáticamente.
- Archivo: `.circleci/config.yml`

---

## Tecnologías

- Angular 17 (Standalone + Animations)
- Mapbox GL + Ngx-Mapbox-GL
- NGRX 17 (Redux Reactive State)
- Jasmine & Karma (Unit Testing)
- Cypress (E2E Testing)
- CircleCI (CI/CD)
- Express (Backend)
- Bootstrap 5
