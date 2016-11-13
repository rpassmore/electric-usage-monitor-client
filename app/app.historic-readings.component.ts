import { ElecChartComponent } from './app.chart.component';
import { ReadingsService } from './app.readings.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'historic-readings',
  templateUrl: './app.historic-readings.component.html'
})
export class HistoricReadingsComponent {  

@ViewChild(ElecChartComponent)  
public elecChart: ElecChartComponent;  

  constructor(private _readingsService: ReadingsService) {    
  }

  public ngOnInit() {
    this.getHistoricReadings();
  }

  private hoursToMilli(hours : number) : number {
    return hours * 60 * 60 * 1000;
  }

  private getHistoricReadings() {
    let refDate = new Date();
    let end : Date = new Date();
    let start : Date = new Date(0);

    this._readingsService.getDailyReadings(start, end).subscribe(data => {
      this.elecChart.updateChart(data); 
    });
  }   
}
