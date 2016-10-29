import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

//My modules
import { AppComponent } from './app.component';
import { RecentReadingsComponent } from './app.recent-readings.component';
import { CurrentReadingsComponent } from './app.current-readings.component';
import { HistoricReadingsComponent } from './app.historic-readings.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    CurrentReadingsComponent,
    RecentReadingsComponent,
    HistoricReadingsComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


