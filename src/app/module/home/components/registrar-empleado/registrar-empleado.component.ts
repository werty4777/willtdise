import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthModel, sexo} from '../../../../shared/models/authModel';
import {AuthService} from '../../../../core/services/auth/auth.service';
import '../../../../../assets/js/searchListadoActividades';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  rol=2;
  sex=sexo.masculino;
  form: FormGroup;
  photo;

  constructor(private builder: FormBuilder, private axis: AuthService, private router: Router) {

    this.form = this.builder.group({
      email: [''],
      name: [''],
      lastName: [''],

      phone: [''],

      photo: ['']
    });

  }

  ngOnInit(): void {
    const rol = String(localStorage.getItem('rol'));
    const rol2 = Number(rol);


    if (rol2 == 2 || rol2 == 3) {
      this.router.navigate(['/inicio']);
    }
  }

  role(a) {
    this.rol = a;
  }

  sexus(a) {
    this.sex = a;
  }

  registrar() {


    //console.log(registrar);
    const registrar: AuthModel = {
      email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      lastName: this.form.controls.lastName.value,
      rol: Number(this.rol),
      phone: this.form.controls.phone.value,
      sex: this.sex,
      photo: ''
    };


    this.axis.guardarFoto(this.photo).subscribe(value => {

      // @ts-ignore
      registrar.photo=value.url;

      this.axis.registrar(registrar).subscribe(value => {
        alert('Registro exitoso');
        this.router.navigate(['/inicio']);
      }, error => {
        console.log(error);
      });


    })





  }

  upload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.photo = reader.result;

    };
  }

}
