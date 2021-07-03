import { Component, OnInit } from '@angular/core';
import '../../../../../assets/js/searchListadoActividades';
import {Router} from '@angular/router';
@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  estados=false;
  emp=false;
  constructor(private router:Router) { }

  ngOnInit(): void {

    const rol=String(localStorage.getItem("rol"));
    const rol2=Number(rol);


    if(rol2==1){
    this.estados=true;
    this.emp=false;
    }else{
      this.emp=true;
    }

  }

   cerrarSession() {
    localStorage.removeItem("token");
    window.location.reload();

     this.router.navigate(['/login']);

  }

   crearInforme() {



     this.router.navigate(['/inicio/registrar'])
  }

  inicio() {
    this.router.navigate(['/inicio'])
  }
  estado(){

    if(String(localStorage.getItem('rol'))=="1"){
      return true;
    }else{return false;}
  }
}
