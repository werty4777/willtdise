import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-previsualizar',
  templateUrl: './previsualizar.component.html',
  styleUrls: ['./previsualizar.component.css']
})
export class PrevisualizarComponent implements OnInit {

  ap="Aprobar"

  estado=false;

  tareas;
  constructor(private axis:AuthService) {


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
    },error => {
      console.log(error);
    })
  }


  aceptar(){

    const rol=String(localStorage.getItem("rol"));
    const rol2=Number(rol);

    const n=String(localStorage.getItem("idreport"));
    let statusd=0;
    if(rol2==1){
      statusd=4;
    }
    if(rol2==3){
      statusd=3;
    }

    const id={numero:Number(n),statuss:statusd};

    this.axis.estadosreportes(id).subscribe(value => {

      console.log(value);
      alert("Correcto");
    },error => {
      console.log(error);
    })
  }
  rechazado(){

    const n=String(localStorage.getItem("idreport"));

    const id={numero:Number(n),statuss:2};

    this.axis.estadosreportes(id).subscribe(value => {

      console.log(value);
      alert("informe rechazado");
    },error => {
      console.log(error);
    })
  }
}
