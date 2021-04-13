import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { CovidtableComponent } from './covidtable/covidtable.component';

const routes: Routes = [
  {path: '', component:CovidChartComponent},
  {path: 'table', component:CovidtableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
