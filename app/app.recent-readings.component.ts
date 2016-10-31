import { PowerTableModule } from 'ng2-power-table';
import { Reading } from './app.reading';
import { randomBytes } from 'crypto';
import { ReadingsService } from './app.readings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'recent-readings',
  templateUrl: './app.recent-readings.component.html'
})
export class RecentReadingsComponent {
  public someRange: number[] = [6, 24];

  // lineChart
  public powerReadingsData: Array<number>;
  public dateReadingsData: Array<Date>;
  public lineChartData: Array<any> = [
    { data: [], label: 'Power' }    
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(private _readingsService: ReadingsService) {
    this.powerReadingsData = new Array();
    this.dateReadingsData = new Array();    
  }

  public ngOnInit() {
    this.getRecentReadings();
  }

  private getRecentReadings() {
    this._readingsService.getRecentReadings().subscribe(data => {
      data.forEach((r) => {
        this.powerReadingsData.push(r.power);
        console.log(r.date);
        this.dateReadingsData.push(r.date);
      });

      let _lineChartData: Array<any> = new Array();                    
      _lineChartData.push({ data: this.powerReadingsData, label: 'Power'});      
      this.lineChartData = _lineChartData;
      this.lineChartLabels = this.dateReadingsData; 
    });
  } 

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }  

  onChange(value: any) {
    console.log('Value changed to', value);
  }
}
