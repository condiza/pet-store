import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authenticationError: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/catalogo']); 
      console.log('Datos del formulario:', this.loginForm.value);

    } else {
      // Si el formulario no es válido, muestra mensajes de error debajo de los campos de formulario
      this.authenticationError = true;
    }
  }
  
}