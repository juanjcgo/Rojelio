import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  register(event: Event){
    console.log('registrar');
    event.preventDefault();
    if (this.authForm.valid){
      const value = this.authForm.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
         this.router.navigate(['/auth/login']);
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
