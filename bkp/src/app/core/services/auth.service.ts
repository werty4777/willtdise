import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../../shared/models/loginModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseModels} from '../../shared/models/responseModels';
import {AuthModel} from '../../shared/models/authModel';
import {ReportModel} from '../../shared/models/reportModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    url = 'https://d293adf5f36d.ngrok.io/';

  constructor(private http: HttpClient) {
  }

  login(login: LoginModel): Observable<any> {

    return this.http.post(this.url + 'login', login).pipe(map((value:ResponseModels)=>{
      this.guardarToken(value.token);
      localStorage.setItem("rol",value.user.idRol)
    }));
  }

  registrar(reg:AuthModel):Observable<any>{

    return  this.http.post(this.url+'register',reg).pipe(map((value:ResponseModels)=>value));
  }


  guardarToken(token){

    localStorage.setItem("token",'Bearer '+token);
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
