import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(){
    
  }

  private buildForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(event: Event){
    console.log('login');
    event.preventDefault();
    if (this.authForm.valid){
      const value = this.authForm.value;
      this.authService.login(value.email, value.password)
      .then(() => {
         this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('Datos no validos');
      });
    }
  }

  get emailField() {
    return this.authForm.get('email');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

}
