import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from './page/home/index.component';
import {AuthService} from '../../core/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { InformesComponent } from './components/informes/informes.component';
import { CrearInformeComponent } from './components/crear-informe/crear-informe.component';
import { ListaInformesComponent } from './components/lista-informes/lista-informes.component';
import {RouterModule} from '@angular/router';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { PrevisualizarComponent } from './components/previsualizar/previsualizar.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatFormFieldModule, MatIconModule} from '@angular/material';





@NgModule({
  declarations: [IndexComponent, InformesComponent, CrearInformeComponent, ListaInformesComponent, PaginaErrorComponent, RegistrarEmpleadoComponent, PrevisualizarComponent],
  imports: [
    MaterialFileInputModule,
    CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule, NgbDatepickerModule, MatFormFieldModule, MatIconModule
  ],
  exports: [IndexComponent],
  providers: [AuthService]

})
export class HomeModule {
}
