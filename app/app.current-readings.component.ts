import { InputDecorator } from '@angular/core/src/metadata/directives';
import { RecentReadingsComponent } from './app.recent-readings.component';
import { Reading } from './app.reading';
import { Observable } from 'rxjs/Rx';
import { ReadingsService } from './app.readings.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'current-readings',
    //templateUrl: './BasicExample.component.html'
    template: `
    <h1>Current readings</h1>
    <h2 *ngFor="let reading of readings | async">Power = {{reading.power}}</h2>
    `
})
export class CurrentReadingsComponent {        
    public readings: Observable<Reading[]>;

    constructor(private _readingsService: ReadingsService) {
    }

    public ngOnInit() {
        console.log('getting current readings');
        this.getCurrentReadings();
    }

     private getCurrentReadings() {
        this.readings = this._readingsService.getDailyReadings();
    }
}




    
