import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeModule} from '../module/home/home.module';
import {ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from '../module/home/page/home/index.component';
import {AuthService} from './services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ReportService} from './services/report/report.service';
import {StatusService} from './services/status/status.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,HomeModule
  ],
  providers:[AuthService,ReportService,StatusService],
  exports: []
})
export class CoreModule {
}
