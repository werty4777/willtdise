import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import '../../../../../assets/js/js';
import {AuthService} from '../../../../core/services/auth.service';
import {LoginModel} from '../../../../shared/models/loginModel';
import {AuthModel} from '../../../../shared/models/authModel';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  form: FormGroup;
  form2: FormGroup;

  constructor(private builder: FormBuilder, private builder2: FormBuilder, private servicio: AuthService,
              private router:Router) {

    this.form = this.builder.group({
      loginemail: ['', Validators.required, Validators.min(10), Validators.pattern('(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')],
      loginPassword: ['', Validators.required, , Validators.min(10)]
    });

    this.form2 = this.builder2.group({

      name: ['', Validators.required, , Validators.min(10)],
      last_name: ['', Validators.required, , Validators.min(10)],
      emailAdress: ['', Validators.required, , Validators.min(10), Validators.pattern('(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')],
      password: ['', Validators.required, , Validators.min(10)],
      passwordCon: ['', Validators.required, , Validators.min(10)]
    });
    this.form2.reset();
    this.form.reset();


  }

  ngOnInit(): void {




    if(localStorage.getItem("token")){
      this.router.navigate(['/inicio']);
    }
  }

   logear() {


     console.log("entro");
    const log: LoginModel = {email: this.form.controls.loginemail.value, password: this.form.controls.loginPassword.value};
    this.servicio.login(log).subscribe(value => {

      Swal.fire({
        icon: 'success',
        title: 'Completado',
        text: 'Exito al logear'
      });

    this.router.navigate(['/inicio']);
    }, error => {

      Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: error.error.message
      });
    });

  }

  registrar() {

    const pw = this.form2.controls.password.value;
    const pw2 = this.form2.controls.passwordCon.value;

    if (pw == pw2) {
      const registro: AuthModel = {
        email: this.form2.controls.emailAdress.value,
        password: this.form2.controls.password.value,
        name: this.form2.controls.name.value,
        lastName: this.form2.controls.last_name.value,

      };

      this.servicio.registrar(registro).subscribe(value => {
        Swal.fire({
          icon: 'success',
          title: 'Completado',
          text: 'Registro Exitoso'
        });
        this.form2.reset();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Ups',
          text: error.error.message
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: 'Las contraseñas deben coincidir'
      });

    }
    this.form2.reset();
  }


}
