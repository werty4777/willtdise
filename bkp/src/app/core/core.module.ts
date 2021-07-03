import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeModule} from '../module/home/home.module';
import {ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from '../module/home/page/home/index.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,HomeModule
  ],
  providers:[],
  exports: []
})
export class CoreModule {
}
