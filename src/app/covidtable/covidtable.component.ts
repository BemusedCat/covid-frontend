import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../data.service';

@Component({
  selector: 'app-covidtable',
  templateUrl: './covidtable.component.html',
  styleUrls: ['./covidtable.component.css']
})
export class CovidtableComponent implements OnInit {

  headers=['location',
    'date',
    'total_cases',
    'new_cases',
    'new_cases_smoothed',
    'total_deaths',
    'new_deaths',
    'new_deaths_smoothed',
    'total_cases_per_million',
    'new_cases_per_million',
    'new_cases_smoothed_per_million',
    'total_deaths_per_million',
    'new_deaths_per_million']

  datas = [];

  dataPerPage=15;
  totalData=500;
  currentPage=7;
  pageSizeOptions=[5,10,15,30,50,100];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest(this.dataPerPage,this.currentPage).subscribe((data: any)=>{
      console.log(data);
      this.datas = data ;
    }); 
  }

  onChangedPage(pageData: PageEvent){

    this.currentPage=pageData.pageIndex+1;
    this.dataPerPage=pageData.pageSize;
    this.dataService.sendGetRequest(this.dataPerPage,this.currentPage).subscribe((data: any)=>{
      console.log(data);
      this.datas = data ;
    }); ;

  }
}