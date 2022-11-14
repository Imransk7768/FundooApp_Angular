import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPwdForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) {}   

  ngOnInit()  
  {
    this.resetPwdForm=this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]],
      confirnPassword: ['', [Validators.required,Validators.pattern("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[,#?!=@%&\^\$\*\)\(\_\.\'\"\+\-]).{8,}$")]]
    });
  }
  get f() { return this.resetPwdForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPwdForm.invalid) {
        return;
    }

  }
}
