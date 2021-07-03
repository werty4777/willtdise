import { Component, OnInit } from '@angular/core';
import '../../../../../assets/js/searchListadoActividades';
import {AuthService} from '../../../../core/services/auth.service';
@Component({
  selector: 'app-lista-informes',
  templateUrl: './lista-informes.component.html',
  styleUrls: ['./lista-informes.component.css']
})
export class ListaInformesComponent implements OnInit {
  datos;
  picker: number | string;

  constructor(private axis:AuthService) { }

  ngOnInit(): void {

  this.axis.getReportes().subscribe(value => {
    console.log(value);
    this.picker="Todos";
    localStorage.setItem("datos",value[0].datos.name+'  '+value[0].datos.lastName);
    console.log(value);
    this.datos=value;
  },error => {
    console.log(error);
  })

  }
cambio2(){
    return this.picker;
}

cambio(a){
  this.picker=String(a.srcElement.value);
  console.log(this.picker);
  return this.picker;
}

setReport(id){
    localStorage.setItem('idreport',id);
}
}
