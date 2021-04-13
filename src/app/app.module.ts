import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';


import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { CovidChartComponent } from './covid-chart/covid-chart.component';

import {MaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CovidtableComponent } from './covidtable/covidtable.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CovidChartComponent,
    CovidtableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }