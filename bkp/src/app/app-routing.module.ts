import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './module/home/page/home/index.component';
import {InformesComponent} from './module/home/components/informes/informes.component';
import {AuthGuardGuard} from './core/guards/auth-guard.guard';
import {CrearInformeComponent} from './module/home/components/crear-informe/crear-informe.component';
import {ListaInformesComponent} from './module/home/components/lista-informes/lista-informes.component';
import {PaginaErrorComponent} from './module/home/components/pagina-error/pagina-error.component';
import {RegistrarEmpleadoComponent} from './module/home/components/registrar-empleado/registrar-empleado.component';
import {PrevisualizarComponent} from './module/home/components/previsualizar/previsualizar.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'login', component: IndexComponent
  }, {
    path: 'inicio', component: InformesComponent, canActivate:[ AuthGuardGuard],children:[
      {
        path:'registrar',component:CrearInformeComponent
      },
      {
        path:'empleados',component:RegistrarEmpleadoComponent
      },
      {
        path:'mostrar',component:PrevisualizarComponent
      }


      ,{
      path:'',component:ListaInformesComponent
      }
    ]
  },

  {
    path: '**', component: PaginaErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
