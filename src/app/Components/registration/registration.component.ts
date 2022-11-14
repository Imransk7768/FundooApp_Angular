import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit 
{
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]],
      confirmPassword: ['', Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]
    }
    );
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }
}