import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReportModel} from '../../../shared/models/reportModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  url = 'https://55e112e5033c.ngrok.io/';

  constructor(private http:HttpClient) {
  }


  private header = new HttpHeaders();
  enviarReporte(modelo:ReportModel):Observable<any>{

    this.header=this.header.set("Authorization", localStorage.getItem('token'));
    console.log(this.header);
    return this.http.post(this.url+'api/report',modelo,{headers:this.header});
  }

  getReportes():Observable<any>{

    this.header=this.header.set("Authorization", localStorage.getItem('token'));
    return  this.http.get(this.url+'api/report',{headers:this.header});
  }

  misDatos(){


  }
  getReporte(numero:{numero:number}):Observable<any>{

    this.header=this.header.set("Authorization", localStorage.getItem('token'));
    return  this.http.post(this.url+'api/rop',numero,{headers:this.header});

  }

  estadosreportes(numero){

    this.header=this.header.set("Authorization", localStorage.getItem('token'));
    return  this.http.post(this.url+'api/status',numero,{headers:this.header});

  }


}
