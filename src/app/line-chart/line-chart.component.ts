import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  idDep: number;

  constructor(private data: DataService) {
    this.data.currentDep.subscribe(idDep => {
      if(this.idDep!=idDep){
        this.HumedadChartData[0].data = [];
        this.HumedadChartLabels = [];
      }
      this.idDep = idDep;
      });
    
  }
  public HumedadChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    
  };
  public HumedadChartLabels = [];
  public HumedadChartType = 'line';
  public HumedadChartLegend = true;
  public HumedadChartData = [
    {data: [], },
  ];


  public canvasWidth = 300;
  public needleValue = 65;
  public centralLabel = '';
  public name = 'Gauge chart';
  public bottomLabel = '65';
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['green','yellow' ,'red'],
      arcDelimiters: [40,50],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  };


  ngOnInit() {
    interval(2000).subscribe(()=>{
      this.HumedadChartData[0].data.push(Math.floor(Math.random()*100)+0);
      this.HumedadChartLabels.push(new Date().getHours()+':'+new Date().getMinutes()+':'+((new Date().getSeconds())));
      var gas=Math.floor(Math.random()*100);
      this.bottomLabel=gas+"";
      this.needleValue=gas;
    });
  }

}