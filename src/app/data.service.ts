import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private API_SERVER = "https://covid19-backend-api2.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(dataPerPage:number, currentPage:number){
    const querrParams = `?pagesize=${dataPerPage}&page=${currentPage}`;
    return this.httpClient.get(this.API_SERVER+'/data/datas'+querrParams);
  }

  public sendGetRequestChart(){
    return this.httpClient.get(this.API_SERVER+'/data/chart');
  }
}