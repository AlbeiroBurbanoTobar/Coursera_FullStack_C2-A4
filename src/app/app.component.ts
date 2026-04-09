import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TrackerState } from './store/tracker.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Centro de Relajación y SPA';
  trackerCounts$: Observable<any>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<{ tracker: TrackerState }>
  ) {
    this.trackerCounts$ = this.store.select(state => state.tracker.counts);
  }

  salir(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
