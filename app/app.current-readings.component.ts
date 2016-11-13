import { HistoricReadingsComponent } from './app.historic-readings.component';
import { InputDecorator } from '@angular/core/src/metadata/directives';
import { RecentReadingsComponent } from './app.recent-readings.component';
import { Reading } from './app.reading';
import { Observable } from 'rxjs/Rx';
import { ReadingsService } from './app.readings.service';
import { Component, Input, OnInit } from '@angular/core';
//import { GaugeSegment, GaugeLabel } from 'ng2-kw-gauge';


@Component({
  moduleId: module.id,
  selector: 'current-readings',
  //templateUrl: './BasicExample.component.html'
  template: `
    <h1>Current readings</h1>
    <!--<h2 *ngFor="let aReading of readings | async">Power = {{aReading.power}}</h2>-->
    <!--<h2>Power = {{reading.power}}</h2>-->
    <!--<ng2-kw-gauge [GaugeSegment]="gaugeSegments"></ng2-kw-gauge>-->
    `
})
export class CurrentReadingsComponent {
  public gaugeSegments: any = { 
    value: 80,
    color: 'Red'            
  };
  public reading: Reading;
  //public readings: Observable<Reading>;

  constructor(private _readingsService: ReadingsService) {
  }

  public ngOnInit() {
    setInterval(() => this.getCurrentReadings(), 5000);
  }

  private getCurrentReadings() {
    this._readingsService.getCurrentReadings().subscribe(data => this.reading = data);
    //this.readings = this._readingsService.getCurrentReadings();
  }
}





