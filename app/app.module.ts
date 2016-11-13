import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';
//import { GaugeModule, GaugeSegment, GaugeLabel } from 'ng2-kw-gauge';

//My modules
import { AppComponent } from './app.component';
import { RecentReadingsComponent } from './app.recent-readings.component';
import { CurrentReadingsComponent } from './app.current-readings.component';
import { HistoricReadingsComponent } from './app.historic-readings.component';
import { ElecChartComponent } from './app.chart.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
    NouisliderModule
    /*GaugeModule, 
    GaugeSegment, 
    GaugeLabel*/
  ],
  declarations: [
    AppComponent,
    CurrentReadingsComponent,
    RecentReadingsComponent,
    HistoricReadingsComponent,
    ElecChartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


