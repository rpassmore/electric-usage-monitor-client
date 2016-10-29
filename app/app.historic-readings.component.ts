import { Data } from '@angular/router';
import { RecentReadingsComponent } from './app.recent-readings.component';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Reading } from './app.reading';
import { ReadingsService } from './app.readings.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    providers: [ReadingsService],
    selector: 'historic-readings',
    //templateUrl: './BasicExample.component.html'
    template: `
    <h1>Historic readings</h1>        
  <div *ngIf="readingsError">An error occurred while loading the historic readings!</div>
  <ul>     
     <li *ngFor="let reading of readings">{{reading.current}}</li>
   </ul> 
    `
})
export class HistoricReadingsComponent {
    public readingsError: Boolean = false;
    public readings: Array<Reading>;    

    constructor(private _readingsService: ReadingsService) {
    }

    public ngOnInit() {
        console.log('getting historic readings');
        this.getDailyReadings();
    }

    private getDailyReadings() {
        this._readingsService.getDailyReadings().subscribe(data => {
            this.readings = data;
            console.log(this.readings);
        });
    }    
}
