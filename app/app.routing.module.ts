import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecentReadingsComponent } from './app.recent-readings.component';
import { CurrentReadingsComponent } from './app.current-readings.component';
import { HistoricReadingsComponent } from './app.historic-readings.component';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current',  component: CurrentReadingsComponent },
  { path: 'recent', component: RecentReadingsComponent },
  { path: 'historic',     component: HistoricReadingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
