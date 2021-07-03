import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../../../shared/models/loginModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseModels} from '../../../shared/models/responseModels';
import {AuthModel} from '../../../shared/models/authModel';
import {ReportModel} from '../../../shared/models/reportModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    url = 'https://light-cobra-28.loca.lt/';

  constructor(private http: HttpClient) {
    this.header=this.header.set("Authorization", localStorage.getItem('token'));
  }

  private header = new HttpHeaders();



  login(login: LoginModel): Observable<any> {

    return this.http.post(this.url + 'login', login).pipe(map((value:ResponseModels)=>{
      this.guardarToken(value.token);
      localStorage.setItem("rol",value.user.idRol.idRol)
    }));
  }

  registrar(reg:AuthModel):Observable<any>{

    return  this.http.post(this.url+'register',reg,{headers:this.header}).pipe(map((value:ResponseModels)=>value));
  }


  guardarToken(token){

    localStorage.setItem("token", 'Bearer '+token);
  }

  guardarFoto(foto){
    const form=new FormData();


    form.append('file',foto);
    form.append('upload_preset','go8zeit9');


    return this.http.post('https://api.cloudinary.com/v1_1/thinker/image/upload',form);




  }

}
