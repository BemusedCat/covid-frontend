import { Component, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataService } from '../data.service';


@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {


  datas = [];
  dates:String[]=[];
  cases:Number[]=[];
  deaths:Number[]=[];


  lineChartData: any = [
    { data: this.deaths , label: 'Deaths' },
    { data: this.cases , label: 'Cases' }
    

  ];
  lineChartData2: any = [
    { data: this.deaths , label: 'Deaths' },
    

  ];

  lineChartLabels: any = this.dates;

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero:true
          }
        }
      ]
  ,
    xAxes: [
      {
        position: 'right',
        ticks: {
          maxTicksLimit: 15
        }
      }
    ]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType:any = 'line';




  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequestChart().subscribe((data: any)=>{
      console.log(data);
    let i;
    for(i=0; i< data.length; ++i){


      this.dates.push(data[i]['date'])
      this.cases.push(data[i]['new_cases'])
      this.deaths.push(data[i]['new_deaths'])
    }
    

      this.datas = data ;

    }); 
  }

}