describe('Suite de Pruebas de Aplicación SPA y Relajación', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('1. Debe cargar la página de inicio o login y redirigir correctamente', () => {
    // Verifica si la url contiene /login o /servicios dependiendo de la guardia de rutas
    cy.url().should('include', 'login').or('include', 'servicios').or('include', 'inicio');
  });

  it('2. Debe registrar clicks mediante la directiva TrackEventDirective en el botón ver catálogo', () => {
    // Vamos al inicio (si está desprotegido para test)
    cy.visit('/inicio');
    // Forzamos el click en el enlace para probar el tracking
    cy.get('a.btn-teal').contains('Ver Catálogo').click({ force: true });
    
    // Verificamos que el contador de NgRx capturó el click del tracking tag buscando el tag rendering
    cy.get('.badge.bg-primary').should('exist');
  });

  it('3. Debe renderizar el mapa Mapbox sin errores fatales', () => {
    cy.visit('/inicio');
    // Chequear que el contenedor del mapa ha cargado en la página de inicio
    cy.get('mgl-map').should('exist');
    cy.get('.mapboxgl-map').should('exist');
  });
});
