import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {ReportService} from '../../../../core/services/report/report.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-previsualizar',
  templateUrl: './previsualizar.component.html',
  styleUrls: ['./previsualizar.component.css']
})
export class PrevisualizarComponent implements OnInit {

  ap="Aprobar"

  estado=false;

  tareas;
  constructor(private axis:ReportService,private router:Router) {


  }

  ngOnInit(): void {

    const rol=String(localStorage.getItem("rol"));
    const rol2=Number(rol);

    if(rol2==2){
      this.estado=true;
    }
    if(rol2==3){
      this.ap="Aprobar";
      this.estado=false;
    }
    if(rol2==1){
      this.ap="Archivar";
      this.estado=false;
    }











    const numeros=localStorage.getItem('idreport');
    const numero:{numero:number}={
      numero:Number(numeros)
    }
    this.axis.getReporte(numero).subscribe(value => {
      console.log(value);
      this.tareas=value;

      if((value.report.status==1 || value.report.status==5) && (rol2==3 || rol2==1)){
        this.estado=false;
      }else{
        this.estado=true;
      }

    },error => {
      console.log(error);
    })
  }


  aceptar(){



    const n=String(localStorage.getItem("idreport"));



    const id={numero:Number(n),statuss:true};

    this.axis.estadosreportes(id).subscribe(value => {

      console.log(value);
      alert("Informe aprobado");
      this.router.navigate(['/inicio'])
    },error => {
      console.log(error);
    })
  }
  rechazado(){

    const n=String(localStorage.getItem("idreport"));

    const id={numero:Number(n),statuss:false};

    this.axis.estadosreportes(id).subscribe(value => {

      console.log(value);
      alert("informe rechazado");
      this.router.navigate(['/inicio'])
    },error => {
      console.log(error);
    })
  }

  descargarArchivo() {

    window.open(this.tareas.url, "_blank");

  }
}
