import { ReadingsService } from './app.readings.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  providers: [ReadingsService],
  template: `
    <h1>{{title}}</h1>    
      <nav>
        <a routerLink="/current" routerLinkActive="active">Current</a>
        <a routerLink="/recent" routerLinkActive="active">Recent</a>
        <a routerLink="/historic" routerLinkActive="active">Historic</a>
      </nav>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Electricity Monitor';
}
